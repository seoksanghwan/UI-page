import '../styles/common.scss';

// /*star rating UI Js */
var onePoint = document.querySelector('.one-point');
var twoPoint = document.querySelector('.two-point');
var fourPoint = document.querySelector('.four-point');
var starUiOne = onePoint.querySelectorAll('.star-point ul li');
var starUiTwo = twoPoint.querySelectorAll('.star-point ul li');
var starUiFour = fourPoint.querySelectorAll('.star-point ul li');

var starPoint = function (event, li) {
  var evpar = event.target;
  var grade = Number(evpar.getAttribute('data-grade'));
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

onePoint.addEventListener('click', function (event) { return starPoint(event, starUiOne) });
twoPoint.addEventListener('click', function (event) { return starPoint(event, starUiTwo) });
fourPoint.addEventListener('click', function (event) { return starPoint(event, starUiFour) });

/*Textarea UI Js */
var boxSection = document.querySelector('.caption-box .default-box')
var defaultTextarea = boxSection.querySelector('.box-section #textUi');
var defaultEm = boxSection.querySelector('.box-section em');
var saveButton = boxSection.querySelector('button');
var readonlySection = document.querySelector('.readonly-box');
var readOnlyTextarea = readonlySection.querySelector('#textUiRead');
var readOnlyEm = readonlySection.querySelector('em');
var disabelSection = document.querySelector('.disabel-box');
var disabelTextarea = disabelSection.querySelector('#textUiDis');
var disabelEm = disabelSection.querySelector('em');
var textLimit = Number(defaultTextarea.getAttribute('maxLength'));

defaultEm.innerText = textLimit;
readOnlyEm.innerText = textLimit;
disabelEm.innerText = textLimit;

var textValue, textLenght, orderStorage;

var ieLowChecker = navigator.userAgent.indexOf('9.0') !== -1 ? true : false;

if (ieLowChecker) {
  var areaText = document.createElement('span');
  areaText.innerText = '내용이 있을수도 있습니다.';
  areaText.classList.add('placeHolder');

  var areaText_readOnly = document.createElement('span');
  areaText_readOnly.innerText = '주문 요청사항을 입력해주세요. 읽기전용 입니다.';
  areaText_readOnly.classList.add('placeHolder');

  var areaText_disabled = document.createElement('span');
  areaText_disabled.innerText = '주문 요청사항을 입력해주세요. 비활성화 상태입니다.';
  areaText_disabled.classList.add('placeHolder');

  boxSection.appendChild(areaText);
  readonlySection.appendChild(areaText_readOnly);
  disabelSection.appendChild(areaText_disabled);
}

var orderOptionEvent = function () {
  textValue = defaultTextarea.value;
  textLenght = textValue.length;
  var lengthText = Number(textLimit) - Number(textValue.length);
  if (textLenght > 0) {
    ieLowChecker ? areaText.classList.add('active') : null;
    saveButton.classList.add('active');
    defaultTextarea.classList.add('active');
    defaultTextarea.parentElement.classList.add('active');
  } else {
    ieLowChecker ? areaText.classList.remove('active') : null;
    ieLowChecker ? areaText_readOnly.classList.remove('active') : null;
    saveButton.classList.remove('active');
    defaultTextarea.classList.remove('active');
    defaultTextarea.parentElement.classList.remove('active');
    readOnlyEm.innerText = textLimit - textValue.length;
  }
  defaultEm.innerText = lengthText > 0 ? lengthText : 0;
  defaultTextarea.value = defaultTextarea.value.slice(0, textLimit);
}

defaultTextarea.addEventListener('keyup', orderOptionEvent);
