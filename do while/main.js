const b = "abcd"
let a = 0;
let password;
do{
    password = prompt("Nhập mật khẩu tại đây: ");
    a++;
    if(password === b){
        alert("Đăng nhập thành công");
        break;
    }
    else{
        alert("Sai mật khẩu vui lòng nhập lại");
    }
} while(a < 3){
    if(a === 2){
    alert("Bạn đã nhập quá số lần vui lòng chờ 10 phút")
    }
}
