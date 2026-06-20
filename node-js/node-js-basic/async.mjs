function samplePromise() {
    return Promise.resolve("Yudi");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();