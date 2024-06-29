const data=[2,3,4,5]

let initialValue=2;

const res=data.reduce((accum,curValue)=>

  
    accum*curValue,
    initialValue,
   

)

console.log(res);