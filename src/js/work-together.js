import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const workForm = document.querySelector('.work-together-form');
const inputEmail = document.querySelector('.work-together-input');

const succesIcon = document.querySelector('.input-icon');
const wrongMsg = document.querySelector('.wrong-message');
succesIcon.style.display = 'none';
wrongMsg.hidden = true;

inputEmail.addEventListener('input', handleInput);
workForm.addEventListener('submit', pushMessage);

function handleInput() {
  succesIcon.style.display = 'none';
  wrongMsg.hidden = true;
  const pattern = inputEmail.pattern;
  const regex = new RegExp(pattern);
  const value = inputEmail.value.trim();

  if (!value || !regex.test(value)) {
    wrongMsg.hidden = false;
    inputEmail.style.color = `#e74a3b`;
    if (value === '') {
      wrongMsg.hidden = true;
    }
  } else {
    succesIcon.style.display = 'block';
    inputEmail.style.color = `inherit`;
  }
}

workForm.addEventListener('submit', pushMessage);

async function pushMessage(event) {
  event.preventDefault();
  const element = event.currentTarget.elements;
  const userMail = element.email.value.trim();
  const userComment = element.message.value.trim();

  fetchData(userMail, userComment)
    .then(({ status, data }) => {
      if (status !== 201) {
        wrongMessage();
        return;
      }
      const titleNew = data.title;
      const messageNew = data.message;
      openModal(titleNew, messageNew);
      workForm.reset();
      succesIcon.style.display = 'none';
    })
    .catch(error => {
      wrongMessage();
    });
}

async function fetchData(userMail, userComment) {
  const url = 'https://portfolio-js.b.goit.study/api/requests';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userMail,
      comment: userComment,
    }),
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then(data => ({
      status: response.status,
      data: data,
    }));
  });
}

function wrongMessage() {
  iziToast.error({
    message:
      'Error! Please, check if you entered correct information and try again!',
    position: 'topRight',
    backgroundColor: 'red',
    titleColor: 'white',
    messageColor: 'white',
    balloon: true,
  });
}

function openModal(title, message) {
  const workOverlay = document.querySelector('.work-together-overlay');

  const titleOverlay = document.querySelector('.work-overlay-title');
  const messageOverlay = document.querySelector('.work-overlay-text');
  titleOverlay.textContent = title;
  messageOverlay.textContent = message;

  workOverlay.classList.add('workOverlay-is-open');

  const handleOverlayEvents = event => {
    if (
      (event.type === 'click' && event.currentTarget === event.target) ||
      (event.type === 'keydown' && event.code === 'Escape') ||
      (event.type === 'click' && event.target.closest('.close-button'))
    ) {
      closeOverlay();
      const formBtn = document.querySelector('.work-together-btn');
      const rootStyles = getComputedStyle(document.documentElement);
      const colorGreen = rootStyles.getPropertyValue('--color-green').trim();
      formBtn.style.background = colorGreen;
    }
  };

  function closeOverlay() {
    workOverlay.classList.remove('workOverlay-is-open');
    document.removeEventListener('keydown', handleOverlayEvents);
    workOverlay.removeEventListener('click', handleOverlayEvents);
  }

  document.addEventListener('keydown', handleOverlayEvents);
  workOverlay.addEventListener('click', handleOverlayEvents);
}
