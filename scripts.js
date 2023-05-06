const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) { // EJERCICIO 1
    event.preventDefault();
  });
}

const images = document.getElementsByTagName('img');
const originImg = images.src;

for (let i = 0; i < images.length; i++){
  
  images[i].addEventListener('click', function(event){ // EJERCICIO 2
    this.src = 'assets/magic-3.gif';
  })
  
  images[i].addEventListener('mouseover', function(event) { // EJERCICIO 3 
    this.src = 'assets/abracadabra.gif';
  });
  images[i].addEventListener('mouseout', function(event) { // EJERCICIO 3
    this.src = originImg;
  });
}

const parragraphs = document.getElementsByTagName('p');
const originParag = parragraphs.src;

for (let i = 0; i < parragraphs.length; i++){
  
  parragraphs[i].addEventListener('click', function(event){ // EJERCICIO 2
    this.style.backgroundColor = 'blue';
    this.style.color = 'white'
  })

  parragraphs[i].addEventListener('mouseover', function(event){ // EJERCICIO 3
    this.style.backgroundColor = 'brown';
    this.style.color = 'red'
})
  parragraphs[i].addEventListener('mouseout', function(event){ // EJERCICIO 3
    this.style = originParag;
  })
}

const articles_sections = document.getElementsByTagName('article', 'section');
const originArtSec = articles_sections.src;

for (let i = 0; i < articles_sections.length; i++){
  
  articles_sections[i].addEventListener('click', function(event){ // EJERCICIO 2
    this.style.backgroundColor = 'yellow';
  })

  articles_sections[i].addEventListener('mouseover', function(event){ // EJERCICIO 3
    this.style.backgroundColor = 'gray';
  })
  articles_sections[i].addEventListener('mouseout', function(event){ // EJERCICIO 3
    this.style = originArtSec;
  })
}
