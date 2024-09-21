const exchangeRates = {
    USD: { EUR: 0.85, VND: 23000 },
    EUR: { USD: 1.18, VND: 27000 },
    VND: { USD: 0.000043, EUR: 0.000037 },
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    let result;

    if (!amount || amount <= 0) {
        result = 'Vui lòng nhập số tiền hợp lệ';
    } else {
        // Chuyển đổi từ USD, EUR, hoặc VND sang các loại còn lại
        const rates = exchangeRates[currency];
        result = '';

        for (const [key, value] of Object.entries(rates)) {
            result += `${amount} ${currency} = ${(amount * value).toFixed(2)} ${key}<br>`; //lấy số nhập vào và đơn vị ${amount} ${currency} = số đó nhân với value 23000/0.85 ${(amount * value) và lấy 2 số thập phân toFixed(2)
        }
    }

    document.getElementById('result').innerHTML = result;
}