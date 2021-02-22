"use strict";

//1. We need 9 divs that change from color1 to color2 on click
//2. Surrounding divs need to change color when centre div is clicked
//3. alert when all divs are on color2
var color1 = "#69801D";
var color2 = "#2f2f2f";
var switch1 = document.getElementById('switch1');
var switch2 = document.getElementById('switch2');
var switch3 = document.getElementById('switch3');
var switch4 = document.getElementById('switch4');
var switch5 = document.getElementById('switch5');
var switch6 = document.getElementById('switch6');
var switch7 = document.getElementById('switch7');
var switch8 = document.getElementById('switch8');
var switch9 = document.getElementById('switch9');
var startScreen = document.getElementById('start-screen'); // 'Hide' hides game start screen

function hide(obj) {
  var el = document.getElementById(obj);
  el.style.display = 'none';
}

function reveal(obj) {
  var instructScreen = document.getElementById(obj);
  instructScreen.style.display = 'flex';
}

function back(obj) {
  var instructScreen = document.getElementById('instructions-screen');
  instructScreen.style.display = 'none';
  console.log("working");
} // function 'toggle' turns clicked square AND immidietly
// surrounding squares grey/green


var win = document.querySelector('.winner');

function revealWin() {
  win.classList.add("show");
  console.log('color2!!!');
}

function checkForWin() {
  if (document.getElementsByClassName("full").length == 9) {
    revealWin();
  }
}

function switched1() {
  switch1.classList.toggle("full");
  switch2.classList.toggle("full");
  switch4.classList.toggle("full");
  checkForWin();
}

function switched2() {
  switch2.classList.toggle("full");
  switch1.classList.toggle("full");
  switch3.classList.toggle("full");
  switch5.classList.toggle("full");
  checkForWin();
}

function switched3() {
  switch3.classList.toggle("full");
  switch2.classList.toggle("full");
  switch6.classList.toggle("full");
  checkForWin();
}

function switched4() {
  switch4.classList.toggle("full");
  switch1.classList.toggle("full");
  switch5.classList.toggle("full");
  switch7.classList.toggle("full");
  checkForWin();
}

function switched5() {
  switch5.classList.toggle("full");
  switch2.classList.toggle("full");
  switch4.classList.toggle("full");
  switch6.classList.toggle("full");
  switch8.classList.toggle("full");
  checkForWin();
}

function switched6() {
  switch6.classList.toggle("full");
  switch3.classList.toggle("full");
  switch5.classList.toggle("full");
  switch9.classList.toggle("full");
  checkForWin();
}

function switched7() {
  switch7.classList.toggle("full");
  switch4.classList.toggle("full");
  switch8.classList.toggle("full");
  checkForWin();
}

function switched8() {
  switch8.classList.toggle("full");
  switch5.classList.toggle("full");
  switch7.classList.toggle("full");
  switch9.classList.toggle("full");
  checkForWin();
}

function switched9() {
  switch9.classList.toggle("full");
  switch6.classList.toggle("full");
  switch8.classList.toggle("full");
  checkForWin();
}