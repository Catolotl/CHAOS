const galleryDiv = document.getElementById('gallery');

// Automatically load all images in /images folder
// You just need to name them jb1.jpg, jb2.jpg, etc.
const totalImages = 20; // adjust to the total number of images you have
let galleryImgs = [];

for(let i=1; i<=totalImages; i++){
    let img = document.createElement('img');
    img.src = `images/jb${i}.jpg`;
    img.alt = `JB Photo ${i}`;
    galleryDiv.appendChild(img);
    galleryImgs.push(img);
}

// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

galleryImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        caption.innerText = img.alt;
        currentIndex = index;
    });
});

closeBtn.onclick = () => { modal.style.display = 'none'; }

function showSlide(index) {
    if(index < 0) index = galleryImgs.length - 1;
    if(index >= galleryImgs.length) index = 0;
    modalImg.src = galleryImgs[index].src;
    caption.innerText = galleryImgs[index].alt;
    currentIndex = index;
}

prevBtn.onclick = () => { showSlide(currentIndex - 1); }
nextBtn.onclick = () => { showSlide(currentIndex + 1); }
