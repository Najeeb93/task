// task question 



let arr = ["bat", "tap", "cat", "tab", "pat"];
let words = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].split('').sort().join('') === arr[j].split('').sort().join('')) {
            words.push(arr[i] + ' ' + arr[j]);
        }
    }
}
console.log(words)


