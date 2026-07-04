import { assert, describe, expect, it } from 'vitest';

function sayHello(name: string): string {
    return `Hello, ${name}!`;
}

describe('sayHello', () => {
    it('should return with name', function () {
        expect(sayHello('John')).to.be.a('string', 'Hello John!');
        assert.equal(sayHello('John'), 'Hello, John!');
    });
});