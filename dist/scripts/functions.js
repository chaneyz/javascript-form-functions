//need to sum of any number input into a or b fields
function add(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return (a+b);
}

function subtract(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return (a-b);
}

//need to create a function that adds the subtotal and tax amount and returns the total
function tax(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a*(b/100);
}

//need to create a function that returns a string
function stringLength(string) {
	if(string.length < 5) {
		return ("short string");
	}
	else if(string.length > 5 && string.length < 10) {
		return ("medium string");
	}
	else {
		return ("long string");
	}
}

//this definitely works, but I think there is a better way to do this
function startsWith(input) {
	if(input==='a' || input==='A') {
		return ("starts with A");
	}
	else if(input==='b' || input==='B') {
		return ("starts with B");
	}
	else if(input==='c' || input==='C') {
		return ("starts with C");
	}
	else if(input==='d' || input==='D') {
		return ("starts with D");
	}
	else if(input==='e' || input==='E') {
		return ("starts with E");
	}
	else {
		return ("starts with something else");
	}
}

//repeat string n times
function stringRepeat (string, n) {
	var result = '';
		for(var i=0; i<n; i++) {
			result += string;
		}
	return result;
}

//nSum 
function nSum(n) {
	var sum = 0;
	for(var i=0; i<=n; i++) {    
		sum += i;
	}
	return sum;
}

//return the quantity of items selected seperated by the string entered
function join(choice, seperator) {
	return choice.join(seperator);
}

//return the quantity of a particular letter in the input value/word
function countLetters(input) {
	var letterCount = {};
	var outputArray=[];
	for(var i=0; i <input.length; i++) {

		var currentLetter = input.charAt(i);

		if(!letterCount.hasOwnProperty(currentLetter)) {
			letterCount[currentLetter] = 1;
		}
		else{
			letterCount[currentLetter]++;
		}    
	}
	for(var propertyName in letterCount) {
		var count=letterCount[propertyName];        
		outputArray.push(' '+propertyName + ': '+ count );
	}
	return outputArray;
}









