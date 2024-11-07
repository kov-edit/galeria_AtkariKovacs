//menu-főoldal
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//menu - mindenhol máshol
function openNav1() {
  document.getElementById("mySidenav1").style.width = "250px";
  document.getElementById("main1").style.marginLeft = "250px";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main1").style.marginLeft= "0";
}