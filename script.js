// Landing page
document.getElementById('start').addEventListener('click', function () {
    this.classList.add('start_clicked'); // Trigger the animation
    this.innerHTML = ''; // Clear the button text
});

// Listen for the animation end event
document.getElementById('start').addEventListener('animationend', function () {
    const landingPage = document.getElementById('landingPage');
    
    // Once the animation ends, hide & remove the landing page
    landingPage.style.display = 'none';
    landingPage.remove();
    
    // Now show the content
    const content = document.getElementById('content');
    content.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(20, 19, 19)';
});



//Navbar:-
let navbarButtons = document.querySelectorAll('.nav_bar a');
for(var i=0; i<navbarButtons.length; i++){
        navbarButtons[i].addEventListener("mouseenter", function(){   
        this.classList.add("a_hover");
    });
        navbarButtons[i].addEventListener("mouseout", function(){
        this.classList.remove("a_hover");
    });
}

//Contact Logos:- 
document.querySelector('#contact').addEventListener("click", function(){
    document.querySelector('.contact_logos').classList.add('contact_logos_clicked');
});  

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
