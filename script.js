

let readmorebtn = document.getElementById('readmorebtn');

let hideText = document.getElementById('hideText');

readmorebtn.addEventListener('click', toggleText);

function toggleText (){
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')){
    readmorebtn.innerHTML = 'Leer menos';
  }
  else{
    readmorebtn.innerHTML = 'Leer Mas'
  }

}