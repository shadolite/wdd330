function doSomething(event) {
  console.log('Something Happened!');
  console.log(event.type);
  console.log(event.target);
  console.log(
    `screen: (${event.screenX},${event.screenY}), 
    page: (${event.pageX},${event.pageY}), 
    client: (${event.screenX},${event.screenY})`
  );
}

addEventListener('click', doSomething);

const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );