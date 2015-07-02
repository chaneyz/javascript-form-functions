var expect = chai.expect;
describe('add', function() {
	it('should convert string to numbers before adding them', function () {
		expect(add('1', '2')).to.equal(3);
	});
	it('should convert string to numbers before adding them', function () {
		expect(add('1.7', '2')).to.equal(3.7);
	});
	
	it('should expect to see invalid input error', function () {
		expect(function() { add('1.7', 'a')}).to.throw('Invalid Input');
	});


describe('subtract', function() {
	it('should convert string to numbers before subtracting them', function () {
		expect(function() { subtract(7) }).to.throw('Invalid Input');
	});


});