import '../styles/common.scss';

const body = document.querySelector('.test-section-01');
const start = document.querySelectorAll('.star-point');

const starPoint = (event, idx) => {
  const evpar = event.target;
  const grade = Number(evpar.dataset.grade);
  const active = document.querySelector('.active');
  const dd = document.querySelectorAll('.star-point ul li');
  if (evpar.tagName === 'LI') {
    for (let i = 0; i < dd.length; i++) {
      if (i <= grade) {
        dd[i].classList.add('active');
      } else {
        dd[i].classList.remove('active');
      }
    }
  }
}


start.forEach((data, idx) => {
  data.addEventListener('click', starPoint)
})