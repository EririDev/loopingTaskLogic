// Soal no 8.
document.write(`<h3>Soal 8</h3>`);
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
        if (x + y === 10 || x===y) {
            document.write(" + &nbsp");
        } else {
            document.write(" - &nbsp");
        }
    }
    document.write("<br>");
}