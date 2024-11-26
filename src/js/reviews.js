// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

register();

const reviewsEl = document.querySelector('.reviews-container');

const createReviewsCard = cardInfo => {
  return `
    <li class="swiper-slide" id="slide">
        <p class="user-comment">${cardInfo.review}</p>
        <div class="user-info">
          <img class="user-photo" src="${cardInfo.avatar_url}" alt="User photo" width="40" height="40" />
          <h4 class="user-name">${cardInfo.author}</h4>
        </div>
    </li>`;
};

const fetchReviews = async () => {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return [];
  }
};

const initReviewsSwiper = async () => {
  const reviewsData = await fetchReviews();

  if (!reviewsData.length) {
    reviewsEl.innerHTML = '<p>Not found</p>';
    iziToast.error({
      message: 'Reviews cannot be loaded at this time.',
      position: 'bottomRight',
    });
    // return alert('Reviews cannot be loaded at this time.');
  }

  const reviewsListHTML = reviewsData
    .map(cardInfo => createReviewsCard(cardInfo))
    .join('');
  reviewsEl.querySelector('.swiper-wrapper').innerHTML = reviewsListHTML;

  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 8,
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-back',
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
};

initReviewsSwiper();
