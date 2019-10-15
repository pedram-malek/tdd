'use strict';

const {expect} = require('chai');
const ZTruncater = require('../ZTruncater');

describe('ZTruncater', ()=> {

	describe('truncate', ()=> {

		it('truncates the letter Z to empty string',()=> {

			const myZTruncater = new ZTruncater();
			const letterToTruncate = 'Z';

			const result = myZTruncater.truncate(letterToTruncate);
			expect(result).to.equal('');

		});

	})

});