// Đợi trang web tải xong
document.addEventListener("DOMContentLoaded", function() {
    // Lấy nút bằng ID
    var likeButton = document.getElementById("likeButton");
    
    // Thêm sự kiện nhấp chuột vào nút
    likeButton.addEventListener("click", function() {
        // Kiểm tra xem nút đã có lớp 'liked' chưa
        if (likeButton.classList.contains("liked")) {
            // Nếu có, xóa lớp 'liked'
            likeButton.classList.remove("liked");
            likeButton.textContent = "Like"; // Đặt lại nội dung của nút
        } else {
            // Nếu không có, thêm lớp 'liked'
            likeButton.classList.add("liked");
            likeButton.textContent = "Liked"; // Thay đổi nội dung của nút
        }
    });
});