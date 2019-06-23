const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');

describe('App',function() {

    // SayHello
    describe('Say Hello',function() {

        // Test 1
        it('should return Hello', function () {
            assert.equal('Hello',app.sayHello());
        });

        // Test 2
        it('should return a String', function () {
            assert.isString(app.sayHello());
        });

        // Test 3
        it('should return a string with length 5', function () {
            assert.lengthOf(app.sayHello() , 5);
        });
    });

    // Reverse String
    describe('ReverseString',function() {

        // Test
        it('should equals to Rever String', function () {
            assert.equal('BAC',app.reverseString('CAB'));
        });

        // Test 2
        it('should should not equals to same String', function () {
            assert.notEqual('ABC',app.reverseString('ABC'));
        });
    });

    // Add
    describe('Add with Expect',function() {

        // Test 1
        it('should return the value 30', function () {
            expect(app.add(10,20)).to.be.equal(30);
        });

        // Test 2
        it('should return a Number', function () {
            expect(typeof app.add(10,20)).to.be.equal('number');
        });

    });
});