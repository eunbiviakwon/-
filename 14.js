var star = '';

for (var i = 0; i < 5; i++) {
  for (var j = 5; j >= 0; j--) {
    if (i < j) {
      star += ' ';
    } else {
      star += '*';
    }
  }
  star += '\n';
}

console.log(star);
