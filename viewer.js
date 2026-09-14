const viewer=document.querySelector('#sofa');
const ar=document.querySelector('#ar');
const status=document.querySelector('#status');
const progress=document.querySelector('#progress');
const retry=document.querySelector('#retry');
let colors={gris:'Gris',arena:'Arena',petroleo:'Petróleo'};
let chosen='gris', inAR=false, modelName='Sofá de dos puestos', materialName='Tapizado';
let modelFiles={gris:'sofa-190-gris.glb',arena:'sofa-190-arena.glb',petroleo:'sofa-190-petroleo.glb'}, iosFiles={};
let required=[189.99,104.13,89.19], customProduct=false;
let factors={gris:[.36,.38,.37,1],arena:[.64,.54,.40,1],petroleo:[.025,.21,.24,1]};
if(new URLSearchParams(location.search).get('integrado')==='1')document.body.classList.add('embedded');
document.querySelector('.ar-palette').addEventListener('beforexrselect',event=>event.preventDefault());
function applyMaterial(){if(customProduct&&!inAR)return;const material=viewer.model?.materials.find(m=>m.name===materialName);if(material&&factors[chosen])material.pbrMetallicRoughness.setBaseColorFactor(factors[chosen]);}

const shareURL='https://dloaiza05.github.io/florenza-sofa-movil/';
const publishedHere=location.origin==='https://dloaiza05.github.io' && location.pathname.startsWith('/florenza-sofa-movil/');
const sharePanel=document.querySelector('.share');
const shareButton=document.querySelector('#share');
if(!publishedHere){
  sharePanel.querySelector('img').hidden=true;
  const link=document.querySelector('#share-link');
  link.removeAttribute('href');
  link.textContent='Publicación pendiente en GitHub. Esta vista solo está disponible en el computador.';
  shareButton.hidden=true;
}
viewer.addEventListener('progress',event=>{document.querySelector('#percent').textContent=Math.round(event.detail.totalProgress*100)+' %'});
viewer.addEventListener('load',()=>{applyMaterial();progress.hidden=true;ar.disabled=false;retry.hidden=true;status.textContent=viewer.canActivateAR?'Listo. Toca el botón para verlo en tu espacio.':'El modelo está listo. Para usar la cámara, abre esta página en un celular compatible.';});
viewer.addEventListener('error',()=>{progress.hidden=true;ar.disabled=true;retry.hidden=false;status.textContent='No pudimos cargar el sofá. Comprueba tu conexión y vuelve a intentarlo.';});
function selectColor(color){
  if(!Object.hasOwn(colors,color))return;
  chosen=color;retry.hidden=true;
  document.querySelector('#color-name').textContent=colors[color];
  document.querySelectorAll('[data-color]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.color===color)));
  viewer.alt=modelName+' · '+colors[color];
  if(inAR){applyMaterial();return;}
  ar.disabled=true;progress.hidden=false;
  status.textContent='Cargando acabado '+colors[color].toLowerCase()+'…';
  if(iosFiles[color])viewer.setAttribute('ios-src',iosFiles[color]);else viewer.removeAttribute('ios-src');
  viewer.src=modelFiles[color];
}
document.addEventListener('click',event=>{const b=event.target.closest('[data-color]');if(b&&chosen!==b.dataset.color)selectColor(b.dataset.color);});
retry.addEventListener('click',()=>{viewer.src=modelFiles[chosen]+'?retry='+Date.now();progress.hidden=false;retry.hidden=true;status.textContent='Volviendo a cargar…';});
async function openCamera(){
  if(!viewer.canActivateAR){status.textContent='Tu navegador no ofrece cámara AR. Abre este enlace en Safari de iPhone o Chrome de un Android compatible. Puedes continuar viendo el sofá en 3D.';document.querySelector('.share').open=true;return;}
  try{await viewer.activateAR();}catch{status.textContent='No se pudo abrir la cámara. Revisa los permisos y la compatibilidad del dispositivo.';}
}
const notice=document.querySelector('#camera-notice'),agree=document.querySelector('#camera-agree'),proceed=document.querySelector('#camera-continue');
ar.addEventListener('click',()=>{agree.checked=false;proceed.disabled=true;notice.showModal();});
agree.addEventListener('change',()=>{proceed.disabled=!agree.checked;});
proceed.addEventListener('click',()=>{if(!agree.checked)return;notice.close();openCamera();});
document.querySelector('#camera-cancel').addEventListener('click',()=>notice.close());
viewer.addEventListener('ar-status',event=>{
  const state=event.detail.status;
  inAR=state==='session-started'||state==='object-placed';
  const step=document.querySelector('#ar-step'),tip=document.querySelector('#ar-tip');
  if(state==='session-started'){step.textContent='1 · Encuentra el piso';tip.textContent='Mueve el celular despacio de lado a lado. Busca una superficie iluminada, sin reflejos.';}
  if(state==='object-placed'){step.textContent='2 · Acomoda el sofá';tip.textContent='Arrástralo hacia el lugar elegido. Comprueba la separación con la pared y los demás muebles.';}
  if(state==='not-presenting'&&viewer.src!==new URL(modelFiles[chosen],location.href).href)selectColor(chosen);
  if(state==='failed')status.textContent='No se pudo colocar el sofá. Usa un piso bien iluminado y abre el enlace directamente en Chrome o Safari.';
});
viewer.addEventListener('ar-tracking',event=>{if(event.detail.status==='not-tracking')document.querySelector('#ar-tip').textContent='El teléfono perdió la referencia. Muévelo despacio hacia el piso hasta recuperar la posición.';});

document.querySelector('#share').addEventListener('click',async()=>{
  if(!publishedHere)return;
  try{if(navigator.share){await navigator.share({title:'Florenza · Sofá en tu espacio',url:shareURL});}else{await navigator.clipboard.writeText(shareURL);status.textContent='Enlace copiado. Envíalo a tu celular.';}}catch(error){if(error.name!=='AbortError')status.textContent='Puedes copiar el enlace que aparece debajo del código QR.';}
});
customElements.whenDefined('model-viewer').then(()=>{if(viewer.loaded){progress.hidden=true;ar.disabled=false;}});

const fitFields=['width','depth','height'];
for(const id of fitFields)document.querySelector('#fit-'+id).addEventListener('input',()=>{
 const values=fitFields.map(key=>Number(document.querySelector('#fit-'+key).value));
 const result=document.querySelector('#fit-result');
 if(values.some(n=>!Number.isFinite(n)||n<=0||n>10000)){result.textContent='Completa las tres medidas en centímetros con valores mayores que cero.';return;}
 const labels=['ancho','fondo','altura'];
 const missing=required.map((n,i)=>n>values[i]?labels[i]+': faltan '+Math.ceil(n-values[i])+' cm':null).filter(Boolean);
 result.textContent=missing.length?'El espacio indicado es menor que el modelo: '+missing.join('; ')+'.':'Según las medidas ingresadas, el modelo cabe en posición frontal. Comprueba los obstáculos y deja espacio para circular.';
});

// Only the same-origin embedding store may configure this viewer.
function safeAsset(value,extension){
 if(typeof value!=="string"||value.length>500)return null;
 try{const u=new URL(value,location.href);return u.origin===location.origin && ["http:","https:"].includes(u.protocol) && !u.search && !u.hash && u.pathname.toLowerCase().endsWith(extension) ? u.href:null;}catch{return null;}
}
window.addEventListener('message',event=>{
 if(window.parent===window || event.source!==window.parent || event.origin!==location.origin || event.data?.type!=='florenza:product')return;
 const p=event.data.product;
 const visibility=p?.viewer||event.data.viewer||{};
 document.querySelector('.dimensions').hidden=visibility.showDimensions===false;
 document.querySelector('.fit-help').hidden=visibility.showFit===false;
 document.querySelector('.rotate-hint').hidden=visibility.showRotate===false;
 ar.hidden=visibility.arEnabled===false;
 if(!p)return;
 const main=safeAsset(p.modelUrl,'.glb');
 if(!main)return;
 const dims=[p.width,p.depth,p.height];
 if(dims.some(x=>typeof x!=='number'||!Number.isFinite(x)||x<=0||x>1000))return;
 const settings=p.viewer||{};
 customProduct=true;
 modelName=String(p.name||'Mueble').slice(0,100);
 materialName=typeof settings.materialName==='string'?settings.materialName.slice(0,100):'';
 required=dims;
 colors={original:'Original'};modelFiles={original:main};iosFiles={original:safeAsset(p.usdzUrl,'.usdz')};factors={};
 const variants=Array.isArray(settings.colors)?settings.colors.slice(0,20):[];
 for(const [i,c] of variants.entries()){
  const file=safeAsset(c.modelUrl,'.glb');
  if(!file||typeof c.label!=='string'||!/^#[a-f0-9]{6}$/i.test(c.hex))continue;
  const id='color'+i;colors[id]=c.label.slice(0,50);modelFiles[id]=file;iosFiles[id]=safeAsset(c.usdzUrl,'.usdz');factors[id]=c.hex;
 }
 // Custom overlays can recolor the named material only in WebXR.
 document.querySelector('.ar-palette').hidden=!materialName||Object.keys(colors).length<2;
 document.querySelectorAll('.colors').forEach(group=>{
  group.replaceChildren();
  for(const [key,label] of Object.entries(colors)){
   // Original material cannot be reconstructed from a hex value inside AR.
   if(group.closest('.ar-palette')&&key==='original')continue;
   const b=document.createElement('button');b.type='button';b.dataset.color=key;b.setAttribute('aria-pressed','false');
   const dot=document.createElement('i');dot.style.setProperty('--swatch',factors[key]||'#888888');b.append(dot,document.createTextNode(label));group.append(b);
  }
 });
 document.querySelector('.controls>.eyebrow').textContent=modelName;
 const dimensions=document.querySelector('.dimensions');dimensions.textContent=`Ancho ${dims[0]} cm · Fondo ${dims[1]} cm · Alto ${dims[2]} cm`;
 dimensions.hidden=settings.showDimensions===false;
 document.querySelector('.fit-help').hidden=settings.showFit===false;
 document.querySelector('.rotate-hint').hidden=settings.showRotate===false;
 document.querySelector('#fit-result').textContent='Completa las tres medidas para compararlas con este producto.';
 for(const key of fitFields)document.querySelector('#fit-'+key).value='';
 ar.hidden=settings.arEnabled===false;
 document.querySelector('.controls>.note:last-child').textContent='Las medidas corresponden a la ficha del producto; verifica que coincidan con la escala del archivo 3D. Los colores son orientativos. No se graban ni suben imágenes de tu espacio.';
 selectColor('original');
});
if(window.parent!==window)window.parent.postMessage({type:'florenza:ready'},location.origin);
