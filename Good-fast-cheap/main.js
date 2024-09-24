const checkbox1 = document.getElementById('goodCheckbox');
const checkbox2 = document.getElementById('fastCheckbox');
const checkbox3 = document.getElementById('cheapCheckbox');

function checkCheckboxes() {
    const checkedCount = [checkbox1.checked, checkbox2.checked, checkbox3.checked].filter(Boolean).length; //mảng, lọc giá trị và đếm 

    if (checkedCount > 2) {
        alert('Đã có 2 lựa chọn bỏ 1 trong 2 cái đã chọn để có thể chọn tiếp');
        this.checked = false; // Bỏ chọn checkbox vừa được chọn
    }  else {
        if (event.target.checked) {
            alert("bạn có chắc chắn chọn nó không?");
        }
    }
}

checkbox1.addEventListener('change', checkCheckboxes);
checkbox2.addEventListener('change', checkCheckboxes);
checkbox3.addEventListener('change', checkCheckboxes);