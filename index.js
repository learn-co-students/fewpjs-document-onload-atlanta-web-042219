document.addEventListener("DOMContentLoaded", function() {
  newText()
});

function newText(){
  const text = document.getElementById('text')
  text.textContent = "This is really cool!"
}