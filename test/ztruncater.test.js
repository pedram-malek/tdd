'use strict';

const {expect} = require('chai');
const ZTruncater = require('../ZTruncater');
const {describe,it} = require("mocha");

describe('ZTruncater', ()=> {
	describe('truncate', ()=> {

		let myZTruncater;
		beforeEach(()=> {

			myZTruncater = new ZTruncater();

		})
		it('truncates the letter Z to empty string',()=> {

			const letterToTruncate = 'Z';
			const result = myZTruncater.truncate(letterToTruncate);

			expect(result).to.equal('');
		});
		var tests = [
			{arg: 'ZABC', expected: 'ABC'},
			{arg: 'ZFFF', expected: 'FFF'},
			{arg: 'ZDAF', expected: 'DAF'}
		];
		tests.forEach((test)=> {
			it('truncates a single leading Z from ' + test.arg + ' to '+ test.expected, () => {

				const result = myZTruncater.truncate(test.arg);
				expect(result).to.equal(test.expected);
			});
		});
	});
});