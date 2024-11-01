
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function toggleDarkMode() {
    
    document.body.classList.toggle("dark-mode");

    
    const button = document.querySelector(".btn_toggleDarkMode");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Desativar Modo Escuro";
        button.classList.add("dark-mode");
    } else {
        button.textContent = "Ativar Modo Escuro";
        button.classList.remove("dark-mode");
    }
}


