function openModal(imageSrc) {
    document.getElementById('myModal').style.display = 'flex';
    document.getElementById('modalImg').src = imageSrc;
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function openModal2(imageSrc) {
    document.getElementById('myModal2').style.display = 'flex';
    document.getElementById('modalImg2').src = imageSrc;
  }

  function closeModal2() {
    document.getElementById('myModal2').style.display = 'none';
  }

//for slideshow

let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1500); 
}

showSlides();
