// scripts.js

function drawTree(rows) {
  for (var i = 1; i <= rows; i++) {
    var star = '';
    
    for (var space = 0; space < rows - i; space++) {
      star += ' ';
    }
    
    for (var j = 0; j < i * 2 - 1; j++) {
       star += '*';
    }
    
    console.log(star);
  }
}

drawTree(6);