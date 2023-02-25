var container = document.getElementsByClassName("container") ;
var navbar = document.getElementsByClassName("navbar") ;
var lsit = document.getElementsByClassName("list") ;

window.onscroll = function(){
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky") ;
  }
  else{
    navbar.classList.remove("sticky") ;
  }
}
