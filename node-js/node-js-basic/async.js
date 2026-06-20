function samplePromise() {
    return Promise.resolve("Yudi");
}

const name = await samplePromise();
console.info(name);