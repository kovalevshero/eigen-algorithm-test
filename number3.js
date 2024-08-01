const inputs = ['xc', 'dz', 'bbb', 'dz'];
const queries = ['bbb', 'ac', 'dz'];

const output = new Array(queries.length).fill(0);

queries.forEach((query, index) => {
    for (const input of inputs) {
        if (query === input) output[index]++;
    }
});

console.log(output);