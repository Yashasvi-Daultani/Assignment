document.querySelector("form").addEventListener("submit",myFunction); 
function myFunction(event){
    event.preventDefault();
    var obj={
     name:document.querySelector("#name").value,
     ma:document.querySelector("#mainActor").value,
    ds:document.querySelector("#desc").value,
    rl:document.querySelector("#release").value,
     ca:document.querySelector("#category").value,
     pr:document.querySelector("#price").value
    };
    var jsonobj=JSON.stringify(obj);
var object=JSON.parse(jsonobj);
localStorage.setItem("movie-list",object);
}
// var jsonobj=JSON.stringify(obj);
// var object=JSON.parse(jsonobj);
// localStorage.setItem("movie-list",object);