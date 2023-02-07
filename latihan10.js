// Soal no 10.
document.write(`<h3>Soal 10</h3>`);
for (let x = 1; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    if (x + y >= 10) {
      document.write("+ &nbsp");
    } else {
      document.write(" - &nbsp");
    }
  }
  document.write("<br>");
}
