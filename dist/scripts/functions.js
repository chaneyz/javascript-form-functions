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

//this definitely works, but I think there is definitely a better way to do this

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

