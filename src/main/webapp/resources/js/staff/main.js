//tạo hàm tải dữ liệu từ api về
function hienThi() {
    const studentAPIT = "http://localhost:8080/dashboard/staff";

    //Dùng fetch để lấy dữ liệu từ api
    fetch(studentAPIT)
        .then((response) => response.json()) //chuyển đổi dữ liệu phản hồi thành dạng json
        .then((data) => {
            let tableBody = document.getElementById("dataStaff");
            let reversendData = data.reverse();

            reversendData.forEach((item) => {
                console.log(item)
                //sử dụng DOM để tạo ra 1 phần ử html mới ( tạo tr)

                let row = document.createElement("tr");

                // Điền thông tin của từng sinh viên vào tr vừa tạo
                row.innerHTML = `
            <td> ${item.id}</td>
            <td> ${item.userInfo.fullName}</td>
            <td> ${item.userInfo.account}</td>
            <td> ${item.userInfo.email}</td>
            <td> ${item.userInfo.gender == 1 ? "Nam" : "Nữ"}</td>
            <td> ${item.userInfo.role}</td>
            <td> ${item.status == 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
            <td> 
            <button class="btn btn-warning" id="editStudentBtn"> Update
            </button>
            <button class="btn btn-danger" id="editStudentBtn"> Delete
            </button>
            </td>
        `;
                tableBody.appendChild(row);
                ;
            });
        });
}

hienThi();
