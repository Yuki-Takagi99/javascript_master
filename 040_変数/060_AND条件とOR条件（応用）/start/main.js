function hello(name) {
    name = name || 'Tom';
    console.log('hello ' + name);
}

hello();

let name = 'Bob';

name && hello(name);