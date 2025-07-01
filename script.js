//your code here
const input = document.getElementById("evaluatedText");
const h3 = document.getElementById("letterCount");
let count =0;

input.addEventListener('input',(event)=>{
	count = event.target.value.length;
	h3.textContent = count;
})


