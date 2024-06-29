function handleClick() {
  const data = [33, 4, 2, 332, 22, 76, 99];
  console.log(data);
  let position = document.getElementById("index").value;
  position = parseInt(position);

  for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
  }

  data.length = data.length - 1;
  console.log(data);
}
