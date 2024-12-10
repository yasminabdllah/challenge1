let xbutton=document.getElementById("x-button");
let navbutton=document.getElementById("nav-button");
let sideBar=document.getElementById("sideBar")
navbutton.addEventListener('click', () => {
    sideBar.classList.toggle('side_bar2');
  });

  xbutton.addEventListener('click', () => {
    sideBar.classList.toggle('side_bar2');
  });