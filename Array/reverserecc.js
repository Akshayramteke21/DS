const data= [12,4,33,40,55,90]

function revrec(data,start,end){

    if (start<=end) {
        let temp= data[start];
        data[start]= data[end];
        data[end]= temp;
         
        revrec(data, start+1, end-1)
    
    }

}


console.log("before reverse", data);


revrec(data,0, data.length-1);
console.log("after reverse", data);


