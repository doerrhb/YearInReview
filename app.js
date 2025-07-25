fetch('data.json')
  .then(res => res.json())
  .then(data => {
    renderCoverflow('movies-container', data.movies);
    renderCoverflow('books-container', data.books);
    renderCoverflow('shows-container', data.shows);

    new Swiper('.movies-swiper', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
    });
    new Swiper('.books-swiper', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
    });
    new Swiper('.shows-swiper', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
    });
  });

function renderCoverflow(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <p>${item.title}</p>
    `;
    container.appendChild(slide);
  });
}