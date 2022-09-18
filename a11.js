let arr=["assignment", "problem", "media", "upload"];
let fl=function(el,i){
    return el[el.length-1]=="a" ||el[0]=="a"
}
let res=arr.filter(fl)
console.log(res)
