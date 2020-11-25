a();

function a() {
    d();
    function d() {
        console.log('d is called')
    }
    console.log('a is called');
}

let b = 0;
console.log(b);