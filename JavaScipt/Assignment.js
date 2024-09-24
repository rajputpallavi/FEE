
function print(data) {
    const label = document.createElement("label");
    label.textContent = data;
    document.body.appendChild(label);
  }
  
  
  function newLine() {
    const br = document.createElement("br");
    document.body.appendChild(br);
  }
  
 
  let board_size = 8;
  

  for (let i = 0; i < board_size; i++) {
    for (let j = 0; j < board_size; j++) {
      const symbol = (i + j) % 2 === 0 ? "*" : "#";
      print(symbol);
    }
    newLine();
  }