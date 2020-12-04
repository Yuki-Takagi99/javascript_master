const a = 0;
const b = 1;
const c = 3;
const d = 0;

// 左辺から評価
console.log(a && b && c);
console.log(a || b || c);

// グループ化
console.log((a || b) && c);
console.log((a || b) && (c || d));