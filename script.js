const back = document.getElementById("back");
const btn = document.getElementById("btn");
back.style.transition = "all 2s";

btn.style.display="none";

function scroll(event){
	back.style.left = '20vh';
	btn.style.display="flex";

}

document.documentElement.addEventListener("wheel", scroll, { passive: false });