let a;
let b = true;

while (b) {
    a = prompt("Nhập số vào đây: ");
    a = Number(a); // Chuyển đổi a thành số

    if (a > 20) {
        b = false; // Đặt b thành false để thoát khỏi vòng lặp
        alert(a + " vượt quá giới hạn 20");
    } else {
        if (a % 2 === 0) {
            alert(a + " là số chẵn");
        } else {
            alert(a + " không phải là số chẵn");
        }
    }
}
