const projectsList = document.querySelector('.projects-list');
const loadMoreBtn = document.querySelector('.projects-load-btn');

let startIndex = 3;
const projectsPerPage = 3;

const allProjects = Array.from(
  document.querySelectorAll('.projects-list-item')
);

allProjects.forEach((project, index) => {
  if (index >= projectsPerPage) {
    project.style.display = 'none';
  }
});

const loadMoreProjects = () => {
  const endIndex = Math.min(startIndex + projectsPerPage, allProjects.length);

  for (let i = startIndex; i < endIndex; i++) {
    allProjects[i].style.display = 'block';
  }

  startIndex = endIndex;

  if (startIndex >= allProjects.length) {
    loadMoreBtn.style.display = 'none';
  }

  const card = document.querySelector(".projects-image");
  const cardHeight = card.getBoundingClientRect().height;

  setTimeout(() => {
    window.scrollBy({
      left: 0,
      top: cardHeight,
      behavior: 'smooth',
    });
  }, 100);
};

loadMoreBtn.addEventListener('click', loadMoreProjects);
