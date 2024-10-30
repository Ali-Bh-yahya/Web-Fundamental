function change_the_Text(element) {
  if (element.innerText === "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}
function cliking_button(element) {
  alert('Ninja was liked');
}
function removeElement() {
  let element = document.querySelector("#section-2");
  element.remove();
}