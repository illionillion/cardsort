'use strict'
import getLength from "./lib/getLength.js";
// const list = process.argv.slice(2)
const list = ['a', 'b', 'c']
console.log(list);
console.log(list.length);

// 全パターン並び替え
const resultlist = new Array(getLength(list.length)).fill([]) // 格納用
console.log(resultlist.length);

let count = 0
while (count < resultlist.length) {
    const result = new Array(list.length).fill('')
    for (let a = 0; a < list.length; a++) {
        // 1個目 (aから時まる)
        result[a] = list[a]
    }
    
    resultlist[count++] = result
}


console.log(resultlist);