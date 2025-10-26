let a = document.createElement('img');
a.setAttribute('src', 'img-1.jpg');

let b = document.createElement('h1');
b.innerText= 'Yo Sup!';

adoptImage = document.querySelector('#adopting').appendChild(a);
adoptText = document.querySelector('#adopting').appendChild(b);
adoptImage.style.width = '500px';