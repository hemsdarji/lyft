let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-sun"></i>'; 
    }
}
