const back = document.getElementById("back");
back.style.transition = "all 2s"

function scroll(event){
	back.style.left = 0;	
}

document.documentElement.addEventListener("wheel", scroll, { passive: false });