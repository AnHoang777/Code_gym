let year = parseInt(prompt("Nhập năm vào đây"));

function isLeapYear(year){
   return (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0);
}


    if (isLeapYear(year)){
    console.log("Năm Nhuận");
    }

    
   else{
    console.log("Không phải năm nhuận");
   }