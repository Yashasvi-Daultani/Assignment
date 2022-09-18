let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  let Bang=function(el){
    return el.place=="Banglore"
  }
  let res=function(el){
    let x=el.firstName+" "+el.lastName;
    return x
  }
    let out =(users.filter(Bang)).map(res);
   console.log(out)