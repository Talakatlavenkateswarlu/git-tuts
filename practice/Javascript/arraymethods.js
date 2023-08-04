/*  USE IN YOUR BROUSER---> CONSOLE

1.push
2.unshift
3.splice
4.pop
5.shift
6.find
7.indexof
8.concat

arr
(5) [2, 5, 8, 7, 9]
arr.push[6,22,38]
undefined
arr
(5) [2, 5, 8, 7, 9]
arr[2]
8
arr.push(22,25,28)
8
arr
(8) [2, 5, 8, 7, 9, 22, 25, 28]
arr.unshift(0,77)
10
arr
(10) [0, 77, 2, 5, 8, 7, 9, 22, 25, 28]
arr.pop(2)
28
arr
(9) [0, 77, 2, 5, 8, 7, 9, 22, 25]
let k =arr.pop(2)
undefined
k
25
arr
(8) [0, 77, 2, 5, 8, 7, 9, 22]
let h = arr.pop(2)
undefined
h
22
arr
(7) [0, 77, 2, 5, 8, 7, 9]
arr.push(55,91,88)
10
arr
(10) [0, 77, 2, 5, 8, 7, 9, 55, 91, 88]
arr.shift()
0
arr
(9) [77, 2, 5, 8, 7, 9, 55, 91, 88]
arr.pop()
88
arr
(8) [77, 2, 5, 8, 7, 9, 55, 91]
arr.shift(2)
77
arr
(7) [2, 5, 8, 7, 9, 55, 91]
let v = arr.shift()
undefined
arr
(6) [5, 8, 7, 9, 55, 91]
let g = arr.shift()
undefined
g
5
arr
(5) [8, 7, 9, 55, 91]0: 81: 72: 93: 554: 91length: 5[[Prototype]]: Array(0)
arr.splice(0,1,88,99,78)
[8]
arr
(7) [88, 99, 78, 7, 9, 55, 91]
arr.splice(0,1,66,89,14)
[88]
arr
(9) [66, 89, 14, 99, 78, 7, 9, 55, 91]
arr.indexof(14,0)
arr.indexOf(99,0)
3
arr = [1,22,4,8,6,44]
(6) [1, 22, 4, 8, 6, 44]
arr
(6) [1, 22, 4, 8, 6, 44]
arr.indexOf(88,0)
-1
arr = [1,5,9,8,7,]
(5) [1, 5, 9, 8, 7]
crr = [99,88,55,64]
(4) [99, 88, 55, 64]
arr.concat(crr)
(9) [1, 5, 9, 8, 7, 99, 88, 55, 64]
arr
(5) [1, 5, 9, 8, 7]
crr = arr.concat(crr)
(9) [1, 5, 9, 8, 7, 99, 88, 55, 64]
crr
(9) [1, 5, 9, 8, 7, 99, 88, 55, 64]
*/


let arr = [5,8,10,15,18]


check =(ele)=>
{
    return ele>10;
}

arr.find(check)
