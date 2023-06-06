function volume_sphere(e) {
	e.preventDefault();
    //Write your code here
	const x=document.getElementById('volume');
	const radius=document.getElementById('radius');
	x.value=4/3*Math.PI*Math.pow(Number(radius.value),3);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
