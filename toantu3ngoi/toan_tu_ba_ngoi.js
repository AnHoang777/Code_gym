let a = +prompt("Nhập số điểm cuối module")
var course = {
    name: "Điểm thi cuối khóa",
    Coin: a
};
var result = course.Coin >= 75 ? `${course.Coin} Qua Môn` : 'Tạch';
console.log(result);
alert(result);
