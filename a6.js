let arr=[1,2,3,4,5,6];
let div3=function(el){
    return el%3==0;
}
let res=arr.filter(div3)


let result=res.reduce(function(acc,el)
{
    return acc+(el**3);
},0)
console.log(result);