const data=[30,44,22,24,5,2,111]

const postion =3;

const element= 33;

for(let i= data.length-1;i>=0;i--){

    if(i>=postion){

        data[i+1]= data[i]

        if (i==postion) {
            
            data[i] = element;
        }
    }
}
console.log(data);