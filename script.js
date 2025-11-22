const gallery = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

gallery.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.innerText = img.alt;
    currentIndex = index;
  });
});

closeBtn.onclick = () => { modal.style.display = 'none'; }

function showSlide(index) {
  if(index < 0) index = gallery.length - 1;
  if(index >= gallery.length) index = 0;
  modalImg.src = gallery[index].src;
  caption.innerText = gallery[index].alt;
  currentIndex = index;
}

prevBtn.onclick = () => { showSlide(currentIndex - 1); }
nextBtn.onclick = () => { showSlide(currentIndex + 1); }
