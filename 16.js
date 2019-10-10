var star = '';

for (var i = 4; i >= 0; i--) {
  for (var j = 0; j < 9; j++) {
    if (j >= 4 - i && j <= 4 + i){
      star = star + '*';
    }
    else {
      star = star + ' ';
    }
  }
  star = star + `\n`;
}

console.log(star);
