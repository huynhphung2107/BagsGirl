<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link to Bootstrap JS and jQuery -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/css/modal.css">
    <script src="/js/add.js"></script>
    <script src="/js/edit.js"></script>


    <title>Danh sách sản phẩm</title>
</head>

<body>
<%@include file="../client/admin/admin.jsp" %>
<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <h1 class="m-auto">Quản lý sản phẩm</h1>
</nav>

<div class="container mt-3">
    <button id="addSanPhamBtn" class="btn btn-success my-3">Thêm sản phẩm</button>
    <%--    <button id="editStudentBtn" class="btn btn-warning my-3">Update Sản phẩm</button>--%>


    <table id="custom-table" class="table table-hover table-striped">
        <thead>
        <tr>
            <th>STT</th>
            <th>Code</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${listSp}" var="sp" varStatus="vitri">
            <tr>
                <td> ${vitri.index}</td>
                <td> ${sp.code}</td>
                <td> ${sp.name}</td>
                <td> ${sp.status}</td>
                <td>
                        <%--                     <button class="editStudentBtn btn btn-warning my-3">Update</button>--%>
                    <button id="editStudentBtn" class="btn btn-warning my-3">Update Sản phẩm</button>
                    <a href="/sanpham/remove/${sp.id}" class="btn btn-danger">Delete </a>

                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>

<!-- Footer -->
<footer class="footer mt-auto py-3 bg-light">
    <div class="container text-center">
        <span class="text-muted">© 2023 Quản lý sản phẩm</span>
    </div>
</footer>

<!-- Modal thêm -->
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="text-align: center">
                <h4 class="modal-title">Thêm sản phẩm</h4>
            </div>
            <div class="modal-body">
                <form id="SanPhamForm" action="/san-pham/add" method="post">
                    <div class="form-group">
                        <label for="code">Mã sản phẩm:</label>
                        <input type="text" class="form-control" id="code" placeholder="Mã tự gen"
                               readonly="true">
                    </div>
                    <div class="form-group">
                        <label for="name">Tên:</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label>Trang thai:</label>
                        <input type="radio" name="status" value="còn hàng" checked>Còn hàng</input>
                        <input type="radio" name="status" value="hết hàng">Hết hàng</input>
                    </div>

                    <button type="submit" class="btn btn-primary my-3">Thêm</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Modal sửa -->

<div class="modal" id="editModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Sửa thông tin sản phẩm</h4>
            </div>
            <div class="modal-body">
                <form id="editStudentForm" action="/san-pham/update" method="post">
                    <input type="hidden" id="editStudentId">
                    <div class="form-group">
                        <label for="editcode">Mã sản phẩm:</label>
                        <input type="text" class="form-control" id="editcode" name="code" value="${sp.code}"
                               readonly="true">
                    </div>
                    <div class="form-group">
                        <label for="editName">Tên:</label>
                        <input type="text" class="form-control" id="editName" name="name" value="${sp.name}" required>
                    </div>
                    <div class="form-group">
                        <label>Trang thai:</label>
                        <input type="radio" name="status" value="còn hàng" ${status=="còn hàng"?"checked":""} checked>Còn
                        hàng</input>
                        <input type="radio" name="status" value="hết hàng" ${status=="hết hàng"?"checked":""} >Hết
                        hàng</input>
                    </div>

                    <button type="submit" class="btn btn-primary my-3">Lưu</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Link to Bootstrap JS and jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
<!-- Link cdn sweetalert2 -->
<%--<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>--%>

</body>


</html>