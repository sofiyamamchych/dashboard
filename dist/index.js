function showMessenger() {
  	document.getElementById("messenger-block").style.display = "block";
  	document.getElementById("projects-block").style.display = "none";
  	var elementActive = document.getElementById("messenger-btn");
    elementActive.classList.add("active-tab");
    var elementInactive = document.getElementById("projects-btn");
    elementInactive.classList.remove("active-tab");
}

function showProjects() {
  	document.getElementById("messenger-block").style.display = "none";
  	document.getElementById("projects-block").style.display = "flex";
  	var elementActive = document.getElementById("projects-btn");
    elementActive.classList.add("active-tab");
    var elementInactive = document.getElementById("messenger-btn");
    elementInactive.classList.remove("active-tab");
}