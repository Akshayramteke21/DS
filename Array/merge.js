const data =[22,11,111,212]
const data2=[45,21,54,67]

const data3=[]


for(let i=0;i<data.length;i++){

    data3[i]=data[i]
}

for(let i=0;i<data2.length;i++){

    data3[data.length+i]=data2[i]
}

console.log(data3);