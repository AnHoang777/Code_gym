function getDaysInMonth(month, year) {
    // Kiểm tra nếu tháng không hợp lệ
    if (month < 1 || month > 12) {
        return 'Tháng không hợp lệ. Vui lòng nhập tháng từ 1 đến 12.';
    }

    // Số ngày trong các tháng (tháng 1 - tháng 12)
    let daysInMonth;
    
    if (month === 2) {
        // Kiểm tra năm nhuận
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            daysInMonth = 29; // Năm nhuận
        } else {
            daysInMonth = 28; // Năm không nhuận
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30; // Các tháng có 30 ngày
    } else {
        daysInMonth = 31; // Các tháng còn lại có 31 ngày
    }

    return `Tháng ${month} năm ${year} có ${daysInMonth} ngày.`;
}

// Nhập tháng và năm từ người dùng
let month = parseInt(prompt("Nhập tháng (1-12):"));
let year = parseInt(prompt("Nhập năm:"));

const result = getDaysInMonth(month, year);
console.log(result);
