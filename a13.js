let arr = [2, 4, 5, 3, 6, 8];
let fl = function (el, i) {

    return el% 2 == 0;
}

let fj = function (el, i) {

    return i%2==0
}

let res = arr.filter(fl).filter(fj)
console.log(res)
