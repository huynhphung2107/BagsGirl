document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ modal theo ID và lưu vào biến modal
    const modal = document.getElementById("editModal");

    // Lấy thẻ button "Thêm sinh viên" theo ID và lưu vào biến addSanPhamBtn
    const editStudentBtn = document.getElementById("editStudentBtn");
    var updateButtons = document.querySelectorAll('.editStudentBtn');

    // Khi click vào nút "Thêm sinh viên", hiển thị modal
    editStudentBtn.onclick = function () {
        modal.style.display = "block";
    };

    // Khi click vào nút có class "close", ẩn modal đi
    $(document).on("click", ".close", function () {
        modal.style.display = "none";
    });

    // Khi click vào bất kỳ vị trí nào bên ngoài modal, ẩn modal đi
    $(window).on("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });


});