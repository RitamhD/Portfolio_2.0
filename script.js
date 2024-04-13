
for(var i=0; i<document.querySelectorAll('a').length; i++){
    document.querySelectorAll('a')[i].addEventListener("mouseover",function(){
        this.classList.add("a_hover");
    });
    document.querySelectorAll('a')[i].addEventListener("mouseout",function(){
        this.classList.remove("a_hover");
    })
}
document.querySelector('#contact').addEventListener("click",function(){
    document.querySelector('.contact_logos').classList.add('contact_logos_clicked');
})
