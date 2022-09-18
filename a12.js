let arr = ["A", "Good", "Problem"];
let fl = function (el, i) {

    return el.length % 2 == 1;
}

let fj = function (acc, el, i) {

    return acc + el.length;
}

let res = arr.filter(fl).reduce(fj,0)
console.log(res)
