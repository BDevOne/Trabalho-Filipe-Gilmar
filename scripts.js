closeSidebar();
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}

function a(){
 console.log("Movies");
}

function b(){
 console.log("Friends");
}

function c(){
 console.log("Hormonios");
}

// EventListener
document.querySelector("#movies").addEventListener("click", a);

// onclick
document.querySelector("#friends").onclick = b;

// onclick
document.querySelector("#hormonios").onclick = c;