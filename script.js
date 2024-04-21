var navbarButtons = document.querySelectorAll('.nav_bar a');

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
  // document.querySelector('.portfolio_textSection').style.display = 'none';
    document.body.style.background = 'rgb(20, 19, 19)';
};
document.getElementById('')













// window.onload = function() {
//   var startButton = document.createElement('button');
//   startButton.innerHTML = "Start";
//   document.body.appendChild(startButton);

//   startButton.addEventListener("click", function() {
//       // Remove the start button after it's clicked
//       document.body.removeChild(startButton);

//       var navbarButtons = document.querySelectorAll('.nav_bar a');

//       for(var i=0; i<navbarButtons.length; i++){
//           navbarButtons[i].addEventListener("mouseenter", function(){   
//               this.classList.add("a_hover");
//               var audio = new Audio("hover_audio.mp3");
//               audio.play();
//           });
//       }
//   });
// }
