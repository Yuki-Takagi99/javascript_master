function printTypeAndValue(val) {
    console.log(typeof val, val);
}

let a = 0;

printTypeAndValue(a);

// parseIntで明示的に型変換ができる
let b = parseInt('1') + a;

printTypeAndValue(b);

// 数値-文字列
let c = 15 - b;

printTypeAndValue(c);

// 数値-null
let d = c - null;

printTypeAndValue(d);

// 数値-true(trueは1とみなされる)
let e = d - true;

printTypeAndValue(e);

