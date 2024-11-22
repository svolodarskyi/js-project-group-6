import axios from 'axios';
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

  try {
    const data = await fetchData(userMail, userComment);
    // if (data.status === 201) {
    // const titleNew = data.title;
    // const messageNew = data.message;

    //   console.log(data);
    //   openModal(titleNew, messageNew);

    openModal();
    workForm.reset();
    succesIcon.style.display = 'none';
  } catch (error) {
    iziToast.error({
      message: 'Error! Please, check your information and try again',
      position: 'topRight',
    });
  }
}

async function fetchData(userMail, userComment) {
  const response = await axios.post(
    'https://portfolio-js.b.goit.study/api-docs/requests',
    {
      email: userMail,
      comment: userComment,
    }
  );
  return response.data;
}

function openModal() {
  const workOverlay = document.querySelector('.work-together-overlay');

  //   const titleOverlay = document.querySelector('.work-overlay-title');
  //   const messageOverlay = document.querySelector('.work-overlay-text');
  //   titleOverlay.textContent = title;
  //   messageOverlay.textContent = message;

  workOverlay.classList.add('workOverlay-is-open');

  const handleOverlayEvents = event => {
    if (
      (event.type === 'click' && event.currentTarget === event.target) ||
      (event.type === 'keydown' && event.code === 'Escape') ||
      (event.type === 'click' && event.target.closest('.close-button'))
    ) {
      closeOverlay();
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
