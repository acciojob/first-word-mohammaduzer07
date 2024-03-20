function firstWord(s) {
  // your code here
	let str = ""
	for(let i = 0; i < s.length; i++){
		if(s.charAt(i) == " "){
			break;
		}
		str += s.charAt(i)
	}
	return str;


	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
