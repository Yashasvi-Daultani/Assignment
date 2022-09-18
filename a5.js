let arr=[1,2,3,4];
let isOdd=function(el){
    return el%2==1;
}
let res=arr.filter(isOdd)


let result=res.reduce(function(acc,el)
{
    return acc+el;
},0)
console.log(result);