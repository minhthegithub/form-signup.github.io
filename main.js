// change color
const borderWrap = document.getElementById("wrap");
const input =  document.getElementsByTagName('INPUT');
function toBlue() {
  borderWrap.style.boxShadow = "0 0 10px 3px #96c2ff";
  input.style.boxShadow.mouseEnter() = "0 0 6px 2px var(--darker-primary-color)";
}
function toPink() {
  borderWrap.style.boxShadow = "0 0 10px 3px #ffd9f5";
  input.style.boxShadow.mouseEnter() = "0 0 6px 2px #ff7bca";
}

// 
