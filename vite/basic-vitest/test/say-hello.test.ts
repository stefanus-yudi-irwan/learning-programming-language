import { describe, it, expect } from 'vitest';
import { sayHello } from '../source/say-hello';

describe('Say Hello', () => {
    it("should say hello", () => {
        const result = sayHello("World");
        expect(result).toBe("Hello, World!");
    });
});