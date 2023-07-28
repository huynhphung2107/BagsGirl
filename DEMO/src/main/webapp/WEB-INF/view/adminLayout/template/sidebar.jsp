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
                    <a href="<c:url value="" />">
                        <span class="glyphicon glyphicon-shopping-cart">&nbsp;</span>Quản lý Đơn Hàng</a>
                </li>
                <li class="side-bar">
                    <a href='<c:url value=""/>'>
                        <span class="glyphicon glyphicon-tasks">&nbsp;</span>Quản lý Danh Mục</a>
                </li>

                <li class="side-bar">
                    <a href='<c:url value=""/>'  class="dropdown-toggle" data-toggle="dropdown">
                        <span class="glyphicon glyphicon-folder-open">&nbsp;</span>Quản lý Sản Phẩm</a>
                    <ul class="dropdown-menu custom-dropdown">
                        <li><a href="#">Liên kết con 1</a></li>
                        <li><a href="#">Liên kết con 2</a></li>
                        <li><a href="#">Liên kết con 3</a></li>
                        <!-- Thêm các liên kết con khác nếu cần -->
                    </ul>
                </li>

                <li class="side-bar">
                    <a href='<c:url value=""/>' >
                        <span class="glyphicon glyphicon-flag">&nbsp;</span>Quản lý Nhãn hiệu</a>
                </li>

                <li class="side-bar main-menu">
                    <a href="<c:url value='' />">
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
