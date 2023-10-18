let xhr= new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response)
    console.log(data);
    console.log(xhr.status);
    for (let i=0; i < data.length; i++ ){
        console.log(`Name: ${data[i].name.common}
        region: ${data[i].region}
        sub region: ${data[i].subregion}
        population: ${data[1].population}
        `)
      console.log("flag", data[i].flags.png);
    }
};
    
//
//let obj1 = {name:"person1", age:5};
//let obj2 = {age:5, name:"person1"};
//console.log(JSON.stringfigy(obj1) === JSON.stringfigy(obj2));
