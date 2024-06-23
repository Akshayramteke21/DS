function monotonic(array){

    let first= array[0];

    let last= array[array.length-1];

    if(first===last){

        for(let i=0; i<array.length-1;i++){

            if(array[i+1]!== array[i]) return false
        }
    }

    else if (first<last){

        for(let i=0; i<array.length-1;i++){

            if(array[i+1]<array[i]) return false;
    }
}

          else  {
            for (let i= 0; i< array.length-1; i++) {
                
                if(array[i+1]>array[i]) return false;
            }
          }

          return true;


}

console.log(monotonic([1,2,3,4,7,4]));