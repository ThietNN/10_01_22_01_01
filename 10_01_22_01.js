let n;
let s = " ";
for (n=1;n<=100;n++){
    s += n + ', '
    if (n===99){
        alert("Đã hoàn thành")
    }
}
document.write(s)