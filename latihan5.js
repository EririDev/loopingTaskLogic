// Soal no.5
document.write(`<h3>Soal 5</h3>`);
let n = 9;
for (let x = 1; x <= n; x++) {
  for (let y = 1; y <= n; y++) {
    if (y % 2 == 0) {
      document.write(" - &nbsp");
    } else {
      document.write("+ &nbsp");
    }
  }
  document.write("<br>" );
}
