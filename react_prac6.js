console.clear();

const arr = [1, 2, 3];
const arr2 = [...arr];
const arr3 = [4, ...arr];
const arr4 = [...arr, 4];
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
arr4.push(5); // 리액트의 useState에서는 불변성을 지켜야 하기 때문에, 이렇게 하면 안된다.
console.log(arr4);
