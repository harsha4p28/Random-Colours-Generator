let code='0123456789abcdef';

const container=document.querySelector('body');
function generate(){
  for(let i=0;i<36;i++){
    const element=document.createElement('div');
    element.classList.add('container');
    const colour=document.createElement('span');
    colour.classList.add('colour');
    let col='#';
    for(let j=0;j<6;j++){
      col+=code.charAt(Math.random()*16);
    }
    colour.textContent=col;
    element.style.backgroundColor=col;
    element.appendChild(colour);
    container.appendChild(element);
  }
}
generate();