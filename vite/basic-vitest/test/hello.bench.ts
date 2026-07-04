import { bench, describe, expect } from 'vitest';

describe("Benchmarking", () => {

    function sayHello(name: string) {
        return `Hello, ${name}!`;
    }

    bench("should run a benchmark", () => {
        const result = sayHello("World");
        expect(result).toBe("Hello, World!");
    })

})