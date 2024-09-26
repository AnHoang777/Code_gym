//tính tổng các số chẵn từ 1 đến 20 
let sum = 0;
for (i=0; i<= 20; i++){
    if(i % 2 === 0){
    sum += i;
  }
}
console.log("Tổng là:", sum);