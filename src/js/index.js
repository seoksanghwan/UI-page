import '../styles/common.scss';

/*star rating UI Js */
var onePoint = document.querySelector('.one-point');
var twoPoint = document.querySelector('.two-point');
var fourPoint = document.querySelector('.four-point');
var starUiOne = onePoint.querySelectorAll('.star-point ul li');
var starUiTwo = twoPoint.querySelectorAll('.star-point ul li');
var starUiFour = fourPoint.querySelectorAll('.star-point ul li');

var starPoint = function (event, li) {
  var evpar = event.target;
  var grade = Number(evpar.dataset.grade);
  var active = document.querySelector('.active');
  if (evpar.tagName === 'LI') {
    for (let i = 0; i < li.length; i++) {
      if (i <= grade) {
        li[i].classList.add('active');
      } else {
        li[i].classList.remove('active');
      }
    }
  }
}

onePoint.addEventListener('click', function (event) { starPoint(event, starUiOne) });
twoPoint.addEventListener('click', function (event) { starPoint(event, starUiTwo) });
fourPoint.addEventListener('click', function (event) { starPoint(event, starUiFour) });

/*Textarea UI Js */
var boxSection = document.querySelector('.caption-box .default-box')
var defaultTextarea = boxSection.querySelector('.box-section #textUi');
var defaultEm = boxSection.querySelector('.box-section em');
var saveButton = boxSection.querySelector('button');
var readonlySection = document.querySelector('.readonly-box');
var readOnlyTextarea = readonlySection.querySelector('#textUiRead');
var readOnlyEm = readonlySection.querySelector('em');

defaultEm.innerText = defaultTextarea.maxLength;
readOnlyEm.innerText = defaultTextarea.maxLength;

let textValue, textLenght;

var orderOptionEvent = function () {
  textValue = defaultTextarea.value;
  textLenght = textValue.length;
  if (textLenght > 0) {
    saveButton.classList.add('active');
    defaultTextarea.classList.add('active');
    defaultTextarea.parentElement.classList.add('active');
  } else {
    saveButton.classList.remove('active');
    defaultTextarea.classList.remove('active');
    defaultTextarea.parentElement.classList.remove('active');
    readOnlyTextarea.value = textValue;
    readOnlyEm.innerText = defaultTextarea.maxLength - textValue.length;
  }
  defaultEm.innerText = defaultTextarea.maxLength - textValue.length;
}

var orderOptionSaveButton = function () {
  readOnlyTextarea.value = textValue;
  readOnlyEm.innerText = defaultTextarea.maxLength - textValue.length;
}

defaultTextarea.addEventListener('keyup', orderOptionEvent);
saveButton.addEventListener('click', orderOptionSaveButton);
