<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false"%>


<div class="container-fluid">
    <div class="col-md-3">

        <div id="sidebar">
            <div class="container-fluid tmargin">
                <div class="input-group">
                </div>
            </div>

            <ul class="nav navbar-nav side-bar">

                <li class="side-bar tmargin">
<%--                    <a href="<c:url value="" />">--%>
                    <a href="/admin">
                        <span  class="active glyphicon glyphicon-home">&nbsp;</span>Trang Chủ</a>
                </li>

                <li class="side-bar tmargin">
                    <a href="<c:url value="" />">
                        <span class="glyphicon glyphicon-shopping-cart">&nbsp;</span>Bán Hàng Tại Quầy</a>
                </li>


                <li class="side-bar">
                    <a href='<c:url value=""/>'  class="dropdown-toggle" data-toggle="dropdown">
                        <span class="glyphicon glyphicon-folder-open">&nbsp;</span>Quản lý Danh Mục >></a>
                    <ul class="dropdown-menu custom-dropdown">
                        <li><a href="#">Sản phẩm</a></li>
                        <li><a href="#">Chất liệu</a></li>
                        <li><a href="#">Thương hiệu</a></li>
                        <li><a href="#">Kiểu khóa</a></li>
                        <li><a href="#">Kích cỡ</a></li>
                        <li><a href="#">Thương hiệu</a></li>
                        <!-- Thêm các liên kết con khác nếu cần -->
                    </ul>
                </li>

                <li class="side-bar">
                    <a href='<c:url value="/balo/hienthi"/>'>
<%--                    <a href="/balo" methods="get">--%>
                        <span class="glyphicon glyphicon-tasks">&nbsp;</span>Quản lý Sản Phẩm</a>
                </li>

                <li class="side-bar">
                    <a href="<c:url value='/staff/hienthi' />">
                    <span class="glyphicon glyphicon-flag">&nbsp;</span>Quản lý Nhân viên</a>
                </li>

                <li class="side-bar main-menu">
                    <a href="<c:url value='/balo/hienthi' />">
                        <span class="glyphicon glyphicon-th-list">&nbsp;</span>Quản lý Tài khoản</a>
                </li>

                <li class="side-bar main-menu">
                    <a href="<c:url value='' />">
                        <span class="glyphicon glyphicon-envelope">&nbsp;</span>Quản lý Liên Hệ</a>
                </li>

                <li class="side-bar main-menu">
                    <a href="<c:url value='' />">
                        <span class="glyphicon glyphicon-signal">&nbsp;</span>Thống kê</a>
                </li>

                <li class="side-bar">
                    <a href="<c:url value='' />">
                        <span class="glyphicon glyphicon-user">&nbsp;</span>Thông tin cá nhân</a>
                </li>

            </ul>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $('.dropdown-toggle').click(function() {
                $(this).siblings('.dropdown-menu').toggle(); // Hiển thị/ẩn danh sách con khi click vào liên kết sản phẩm
            });
        });
    </script>

<%--    <script src="<c:url value='/js/admin.js'/>" ></script>--%>
