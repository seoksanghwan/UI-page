import '../styles/common.scss';

/*star rating UI Js */
const onePoint = document.querySelector('.one-point');
const twoPoint = document.querySelector('.two-point');
const fourPoint = document.querySelector('.four-point');
const starUiOne = onePoint.querySelectorAll('.star-point ul li');
const starUiTwo = twoPoint.querySelectorAll('.star-point ul li');
const starUiFour = fourPoint.querySelectorAll('.star-point ul li');

const starPoint = (event, li) => {
  const evpar = event.target;
  const grade = Number(evpar.dataset.grade);
  const active = document.querySelector('.active');
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

onePoint.addEventListener('click', event => starPoint(event, starUiOne));
twoPoint.addEventListener('click', event => starPoint(event, starUiTwo));
fourPoint.addEventListener('click', event => starPoint(event, starUiFour));

/*Textarea UI Js */
const boxSection = document.querySelector('.caption-box .default-box')
const defaultTextarea = boxSection.querySelector('.box-section #textUi');
const defaultEm = boxSection.querySelector('.box-section em');
const saveButton = boxSection.querySelector('button');
const readonlySection = document.querySelector('.readonly-box');
const readOnlyTextarea = readonlySection.querySelector('#textUiRead');
const readOnlyEm = readonlySection.querySelector('em');

defaultEm.innerText = defaultTextarea.maxLength;
readOnlyEm.innerText = defaultTextarea.maxLength;

let textValue, textLenght;

const orderOptionEvent = () => {
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

const orderOptionSaveButton = () => {
  readOnlyTextarea.value = textValue;
  readOnlyEm.innerText = defaultTextarea.maxLength - textValue.length;
}

defaultTextarea.addEventListener('keyup', orderOptionEvent);
saveButton.addEventListener('click', orderOptionSaveButton);
