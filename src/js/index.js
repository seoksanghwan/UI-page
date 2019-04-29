import "@babel/polyfill";
import '../styles/common.scss';

// /*star rating UI Js */
const onePoint = document.querySelector('.one-point');
const twoPoint = document.querySelector('.two-point');
const fourPoint = document.querySelector('.four-point');
const starUiOne = onePoint.querySelectorAll('.star-point .star-raiting button');
const starUiTwo = twoPoint.querySelectorAll('.star-point .star-raiting button');
const starUiFour = fourPoint.querySelectorAll('.star-point .star-raiting button');

const starPoint = (event, li) => {
  const evpar = event.target;
  const grade = Number(evpar.getAttribute('data-grade'));
  const active = document.querySelector('.active');
  if (evpar.tagName === 'BUTTON') {
    for (let i = 0; i < li.length; i++) {
      if (i <= grade) {
        li[i].classList.add('active');
      } else {
        li[i].classList.remove('active');
      }
    }
  }
}

onePoint.addEventListener('click', event => { return starPoint(event, starUiOne) });
twoPoint.addEventListener('click', event => { return starPoint(event, starUiTwo) });
fourPoint.addEventListener('click', event => { return starPoint(event, starUiFour) });

/*Textarea UI Js */
const boxSection = document.querySelector('.caption-box .default-box')
const defaultTextarea = boxSection.querySelector('.box-section #textUi');
const defaultEm = boxSection.querySelector('.box-section em');
const saveButton = boxSection.querySelector('button');
const readonlySection = document.querySelector('.readonly-box');
const readOnlyTextarea = readonlySection.querySelector('#textUiRead');
const readOnlyEm = readonlySection.querySelector('em');
const disabelSection = document.querySelector('.disabel-box');
const disabelTextarea = disabelSection.querySelector('#textUiDis');
const disabelEm = disabelSection.querySelector('em');
const textLimit = Number(defaultTextarea.getAttribute('maxLength'));

defaultEm.innerText = textLimit;
readOnlyEm.innerText = textLimit;
disabelEm.innerText = textLimit;

let textValue, textLenght, orderStorage;

const ieLowChecker = navigator.userAgent.indexOf('9.0') !== -1 ? true : false;

/*IE9 PlaceHolder Event*/
if (ieLowChecker) {
  const areaText = document.createElement('span');
  areaText.innerText = '내용이 있을수도 있습니다.';
  areaText.classList.add('placeHolder');

  const areaText_readOnly = document.createElement('span');
  areaText_readOnly.innerText = '주문 요청사항을 입력해주세요. 읽기전용 입니다.';
  areaText_readOnly.classList.add('placeHolder');

  const areaText_disabled = document.createElement('span');
  areaText_disabled.innerText = '주문 요청사항을 입력해주세요. 비활성화 상태입니다.';
  areaText_disabled.classList.add('placeHolder');

  boxSection.appendChild(areaText);
  readonlySection.appendChild(areaText_readOnly);
  disabelSection.appendChild(areaText_disabled);

  const focusInOutEvent = element => {
    element.addEventListener('focusin', () => {
      element.name === 'textUi' ? (defaultTextarea.value.length <= 0 ? areaText.classList.add('active') : false) : areaText_readOnly.classList.add('active');
    });
    element.addEventListener('focusout', () => {
      element.name === 'textUi' ? (defaultTextarea.value.length <= 0 ? areaText.classList.remove('active') : false) : areaText_readOnly.classList.remove('active');
    });
  }

  focusInOutEvent(defaultTextarea);
  focusInOutEvent(readOnlyTextarea);
}

const orderOptionEvent = () => {
  textValue = defaultTextarea.value;
  textLenght = textValue.length;
  const lengthText = Number(textLimit) - Number(textValue.length);

  if (textLenght > 0) {
    saveButton.classList.add('active');
    defaultTextarea.classList.add('active');
    defaultTextarea.parentElement.parentElement.classList.add('active');
  } else {
    saveButton.classList.remove('active');
    defaultTextarea.classList.remove('active');
    defaultTextarea.parentElement.parentElement.classList.remove('active');
    readOnlyEm.innerText = textLimit - textValue.length;
  }

  defaultEm.innerText = lengthText > 0 ? lengthText : 0;
  defaultTextarea.value = defaultTextarea.value.slice(0, textLimit);
}

defaultTextarea.addEventListener('keyup', orderOptionEvent);
