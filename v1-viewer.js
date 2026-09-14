const viewer=document.querySelector('#sofa');
const ar=document.querySelector('#ar');
const status=document.querySelector('#status');
const progress=document.querySelector('#progress');
const retry=document.querySelector('#retry');
const colors={gris:'Gris',arena:'Arena',petroleo:'Petróleo'};
let chosen='gris';
const shareURL='https://dloaiza05.github.io/florenza-sofa-movil/v1.html';
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
viewer.addEventListener('load',()=>{progress.hidden=true;ar.disabled=false;retry.hidden=true;status.textContent=viewer.canActivateAR?'Listo. Toca el botón para verlo en tu espacio.':'El modelo está listo. Para usar la cámara, abre esta página en un celular compatible.';});
viewer.addEventListener('error',()=>{progress.hidden=true;ar.disabled=true;retry.hidden=false;status.textContent='No pudimos cargar el sofá. Comprueba tu conexión y vuelve a intentarlo.';});
function selectColor(color){
  if(!Object.hasOwn(colors,color))return;
  chosen=color;ar.disabled=true;progress.hidden=false;retry.hidden=true;
  document.querySelector('#color-name').textContent=colors[color];
  document.querySelectorAll('[data-color]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.color===color)));
  viewer.alt='Sofá de dos puestos, modelo de prueba de Blender en color '+colors[color];
  status.textContent='Cargando acabado '+colors[color].toLowerCase()+'…';
  viewer.src='sofa-190-'+color+'.glb';
}
document.querySelectorAll('[data-color]').forEach(b=>b.addEventListener('click',()=>{if(chosen!==b.dataset.color)selectColor(b.dataset.color)}));
retry.addEventListener('click',()=>{viewer.src='sofa-190-'+chosen+'.glb?retry='+Date.now();progress.hidden=false;retry.hidden=true;status.textContent='Volviendo a cargar…';});
ar.addEventListener('click',async()=>{
  if(!viewer.canActivateAR){status.textContent='Tu navegador no ofrece cámara AR. Abre este enlace en Safari de iPhone o Chrome de un Android compatible. Puedes continuar viendo el sofá en 3D.';document.querySelector('.share').open=true;return;}
  try{await viewer.activateAR();}catch{status.textContent='No se pudo abrir la cámara. Revisa los permisos y la compatibilidad del dispositivo.';}
});
viewer.addEventListener('ar-status',event=>{if(event.detail.status==='failed')status.textContent='No se pudo colocar el sofá. Prueba con más luz y apunta a un piso despejado.';});
document.querySelector('#share').addEventListener('click',async()=>{
  if(!publishedHere)return;
  try{if(navigator.share){await navigator.share({title:'Florenza · Sofá en tu espacio',url:shareURL});}else{await navigator.clipboard.writeText(shareURL);status.textContent='Enlace copiado. Envíalo a tu celular.';}}catch(error){if(error.name!=='AbortError')status.textContent='Puedes copiar el enlace que aparece debajo del código QR.';}
});
customElements.whenDefined('model-viewer').then(()=>{if(viewer.loaded){progress.hidden=true;ar.disabled=false;}});
