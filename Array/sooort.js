function soooort(data){
    

let n = data.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (data[j] > data[j + 1]) {
      [data[j], data[j + 1]] = [data[j + 1], data[j]];
    }
  }
}

return data;
}
console.log(soooort([3,2,-11,4,2,1]));
