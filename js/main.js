let slideIndex = 1;
showSlides(slideIndex);

function pluseslides(n){
  showSlides(slideIndex += n);
}
function currentslide(n){
  showSlides(slideIndex = n);
}
function showSlides(n){
  let i;
  let sliders = document.getElementsByClassName('Mysliders');
  let dots  = document.getElementsByClassName('dot');

  if (n >sliders.length){
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex=sliders.length;
  }
  for (i = 0; i <sliders.length; i++){
    sliders[i].style.display= "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "")
  }
  sliders[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
