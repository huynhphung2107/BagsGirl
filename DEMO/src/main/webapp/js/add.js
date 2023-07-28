document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ modal theo ID và lưu vào biến modal
    const modal = document.getElementById("myModal");

    // Lấy thẻ button "Thêm sinh viên" theo ID và lưu vào biến addSanPhamBtn
    const addSanPhamBtn = document.getElementById("addSanPhamBtn");

    // Khi click vào nút "Thêm sinh viên", hiển thị modal
    addSanPhamBtn.onclick = function () {
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
// Lắng nghe sự kiện khi yêu cầu thêm sản phẩm hoàn thành
$(document).ready(function() {
    $("#addProductForm").submit(function(event) {
        event.preventDefault();

        // Gửi yêu cầu thêm sản phẩm
        $.ajax({
            type: "POST",
            url: "/addProduct",
            data: $(this).serialize(),
            success: function(response) {
                // Hiển thị modal thành công
                $("#successModal").modal("show");
            },
            error: function(xhr) {
                // Hiển thị modal lỗi
                $("#errorModal").modal("show");
            }
        });
    });
});
