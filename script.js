const back = document.getElementById("myVideo");
let i = -800;

/*
document.documentElement.addEventListener('mousewheel', function(e){
	i += e.deltaY;
  pre.style.left = i + 'px';
})
*/

back.style.transition = "all 2s"

function zoom(event){
	i += event.deltaY;
	//back.style.left = -i + 'px';
	back.style.left = 0;	
	
	
}

document.documentElement.addEventListener("wheel", zoom, { passive: false });