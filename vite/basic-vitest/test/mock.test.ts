import { describe, expect, it, vi } from 'vitest';

describe('mock', () => {
    function sayHello(name: string, callback: (message: string) => void): void {
        callback("Hello " + name);
    }

    it('should mock', () => {
        const callback = vi.fn(); //vitest mock function
        sayHello("World", callback);

        expect(callback).toHaveBeenCalledWith("Hello World");
    });
});