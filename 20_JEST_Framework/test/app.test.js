const app = require('../app');
const utility = require('../utility');

describe('App',function() {
    // SayHello
    describe('SayHello' , function() {
       // Test 1
        test('should return Hello', function () {
            expect(app.sayHello()).toBe('Hello');
        });
    });


    // Reverse String
    describe('Reverse String' , function() {
        // Test 1
        test('should return olleH', function () {
            expect(app.reverseString('Hello')).toBe('olleH');
        });
    });
});