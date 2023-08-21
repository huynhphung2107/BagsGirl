//tạo hàm tải dữ liệu từ api về
function hienThi() {
    const studentAPIT = "http://localhost:8080/dashboard/balo";

    //Dùng fetch để lấy dữ liệu từ api
    fetch(studentAPIT)
        .then((response) => response.json()) //chuyển đổi dữ liệu phản hồi thành dạng json
        .then((data) => {
            let tableBody = document.getElementById("dataStudents");
            let reversendData = data.reverse();

            reversendData.forEach((item) => {
                console.log(item)
                //sử dụng DOM để tạo ra 1 phần ử html mới ( tạo tr)

                let row = document.createElement("tr");

                // Điền thông tin của từng sinh viên vào tr vừa tạo
                row.innerHTML = `
            <td> ${item.id}</td>
            <td> ${item.code}</td>
            <td> ${item.name}</td>
            <td> ${item.status}</td>
            <td> 
            <button class="btn btn-warning" id="editStudentBtn"> Update
            </button>
            <button class="btn btn-danger" id="editStudentBtn"> Delete
            </button>
            </td>
        `;
                tableBody.appendChild(row);

            });
        });
}

hienThi();
