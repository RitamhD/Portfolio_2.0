//Navbar:-
let navbarButtons = document.querySelectorAll('.nav_bar a');
for(var i=0; i<navbarButtons.length; i++){
        navbarButtons[i].addEventListener("mouseenter", function(){   
        this.classList.add("a_hover");
        var audio = new Audio("hover_audio.mp3");
        audio.play();
    });
        navbarButtons[i].addEventListener("mouseout", function(){
        this.classList.remove("a_hover");
    });
}
document.querySelectorAll('a').forEach(link => {
    link.addEventListener("click", function() {
      var audio = new Audio("mouse_click2.mp3")
      audio.play();
    });
  });
//Contact Logos:- 
document.querySelector('#contact').addEventListener("click", function(){
    document.querySelector('.contact_logos').classList.add('contact_logos_clicked');
});

document.getElementById('start').addEventListener('click',function(){
  this.classList.add('start_clicked');
  this.innerHTML = null;
  setTimeout(hideStartContent, 800);
})
function hideStartContent(){
  document.getElementById('start').style.display = 'none';
  document.querySelector('.portfolio').style.display = 'none';
  document.getElementById('content').style.display = 'block';
    document.body.style.background = 'rgb(20, 19, 19)';
};
//Carousel Images:-
let images = document.querySelectorAll('#carousel img');
let buttons = document.getElementsByClassName('button');
let isProcessing = false;

document.querySelector('.right').addEventListener("click", () => {
    if (isProcessing) {
        return;
    }
    isProcessing = true;
    swapStyles(0, 1, 2);
    setTimeout(function() {
        isProcessing = false;
    }, 500); // delay
});
document.querySelector('.left').addEventListener("click", () => {
    if (isProcessing) {
        return;
    }
    isProcessing = true;
    swapStyles(0, 2, 1);
    setTimeout(function() {
        isProcessing = false;
    }, 500); // delay
});
function swapStyles(sourceIndex, targetIndex1, targetIndex2){
    let tempStyles = window.getComputedStyle(images[sourceIndex]);
    let copiedStyles1 = window.getComputedStyle(images[targetIndex1]);
    let copiedStyles2 = window.getComputedStyle(images[targetIndex2]);

    copyStyles(copiedStyles1, images[sourceIndex]);
    copyStyles(copiedStyles2, images[targetIndex1]);
    copyStyles(tempStyles, images[targetIndex2]);
}
function copyStyles(copied_styles, target_element){
    for(let pr of copied_styles){
        target_element.style[pr] = copied_styles[pr];
    }
}

// let carouselImages = document.querySelectorAll('.carousel_img');
// for(var i=0; i<carouselImages.length; i++){
//     carouselImages[i].addEventListener("mouseover", function(){
//         console.log(this.lastElementChild);
//         this.lastElementChild.classList.add('onHover');
//     })
// }