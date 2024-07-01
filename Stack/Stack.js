let data = [];

let max = 5;

let currentSize = data.length;

function Push() {
  let newEl = document.getElementById("insert").value;
  if (currentSize > max) {
    console.log("Max size excedded");
  }

  else{
    data[currentSize] = newEl;
  currentSize++; 

 document.getElementById('insert').value=""
 console.log("Element added successfully");
  }
 
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;

    data.length = currentSize;
  }
  else{
    console.log("stack already empty");
  }
}

function display() {
  for (let i = 0; i <= currentSize - 1; i++) {
    console.log( 'element at' ,i, 'is ',data[i]);
  }
}

Push(5);
Push(10);
Push(15);
Push(20);
Push(25);
console.log(data);
pop();
console.log(data);
