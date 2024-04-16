var navbarButtons = document.querySelectorAll('.nav_bar a');

for(var i=0; i<navbarButtons.length; i++){
        navbarButtons[i].addEventListener("mouseover", function(){   
        this.classList.add("a_hover");
        var audio = new Audio("hover_audio2.mp3");
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
  
document.querySelector('#contact').addEventListener("click", function(){
    document.querySelector('.contact_logos').classList.add('contact_logos_clicked');
});