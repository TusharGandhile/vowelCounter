let inputEl = document.getElementById("input-el")
let check = document.getElementById("check");
 
check.addEventListener("click",() => {
	
		 countVowel();
	
})
//let str ="I love My india";
function countVowel(){ 

	let str = inputEl.value;
	let count = 0;

	let vowels=['a','e','i','o','u'];

	for(ch of str.toLowerCase()){
		if(vowels.includes(ch)){
			count++;
		}
	}
	alert(`Number of vowels in given string is: ${count}`);
	
}
