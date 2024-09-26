let a = prompt("nhập số vào đây: ");
while(a < 20){
    if(a % 2 === 0){
    alert(a + " là số chẵn");
    }
    if(a % 2 != 0){
    alert(a + " không phải là số chẵn");   
    }
    break;
}