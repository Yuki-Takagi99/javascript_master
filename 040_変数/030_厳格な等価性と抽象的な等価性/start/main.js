function printEquality(a, b) {
    // 厳格な等価性を比較（型の比較あり）
    console.log(a === b);
    // 抽象的な等価性を比較（型の比較なし）
    console.log(a == b);
}

let a = '1';
let b = 1;

let c = true;

printEquality(b, c);

let d = '';
let e = 0;

printEquality(d, e);

let f = null;
let g;

printEquality(f, g);