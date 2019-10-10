var star = '';

for (var i = 1; i <= 5; i++) {
 for (var j = 1; j <= 5; j++) {
  if (i >= j) {
    star = star + '*';
  }
 }
 star = star + '\n';
}

console.log(star);

