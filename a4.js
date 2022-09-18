let arr=[1,2,3];
let res=arr.reduce(function(acc,el)
{
    return acc*el;
},1)
console.log(res);