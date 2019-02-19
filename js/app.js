var menu = document.querySelectorAll(".menu-item");

var showMenu = false;

function show() {
  showMenu = !showMenu;
  if(showMenu){
    for (var i = 0; i < menu.length; i++) {
      menu[i].style.transition = "all 1s linear";
      menu[i].style.margin = "1px";
      menu[i].style.transform = "translateX(0)";
      menu[i].style.opacity = "1";
    }
  } else {
    for (var i = 0; i < menu.length; i++) {
      menu[i].style.transition = "all 1s linear";
      menu[i].style.margin = "1px";
      menu[i].style.transform = "translateX(-500%)";
      menu[i].style.opacity = "0";
    }
  }
}

sal();

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

