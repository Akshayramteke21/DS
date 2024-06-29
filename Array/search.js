const data=[22,33,1,10,20,30,40,50,2,212]

let element=30;
let indexx=[]

for(let i=0; i<data.length-1;i++){

    if(data[i]==element){

        indexx= i;
    }
}
console.log(indexx);
console.log(data.indexOf(30));
console.log(delete data[2])

