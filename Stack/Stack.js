const data = [];
const max = 5;
let currentSize = data.length;

function push(newval) {
  if (currentSize > max) {
    console.log("Max stack exceded");
  }

  data[currentSize] = newval;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;

    data.length = currentSize;
  }
}
console.log("pushing elements",data);
push(10);
push(22);
push(44);
console.log("data:",data);

push(55);
console.log("before pop",data);
pop();
pop();



console.log("popping out last element");
console.log(data);
