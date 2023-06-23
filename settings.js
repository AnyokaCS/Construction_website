// Header Scroll 
var audio = document.getElementById("myAudio");
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled"); 
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
var i = 0;
    flag = false;
window.onload = function() {
    var button = document.getElementsByClassName("mus");
    button.addEventListener("click", function() {
      i = i+1;
        if(i==2) {
            i = 0;
            flag = !flag;
        }
        if(flag == true) {
             audio.play();
        } else {
            audio.pause();
        }
    });
  };
    document.addEventListener('keydown', handleKeyPress);

    // Event handler function for keydown event
    function handleKeyPress(event) {
      // Access the pressed key through the event object
      var key = event.key;
        if(key === 'V' || key === 'v') {
            if(flag == true) {
                audio.pause();
            } else if(flag == false) {
                audio.play();
            }
        }
    }
 