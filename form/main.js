'use strict';
function setUp() {
  var allInputs = Array.from(document.querySelectorAll('input'))
  var tagUl = document.querySelector('ul')
  var submit = document.querySelector('button')


  var liElement = document.createElement('li')


  submit.addEventListener('click', function (event) {
    var nameAttribute = target.getAttribute('name')
    liElement.innerHTML = 'dado:' + nameAttribute;  
    tagUl.appendChild(liElement)

  }) 

}

window.onload = setUp;