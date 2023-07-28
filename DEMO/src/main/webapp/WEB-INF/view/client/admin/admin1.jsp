<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>

<head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="shortcut icon" href="../static/iphone14" type="image/x-icon">
    <title>BaloShops</title>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' rel='stylesheet'>
    <link href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css' rel='stylesheet'>
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <script src="https://kit.fontawesome.com/600f0dcfd4.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/index.css">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.8/angular.js "></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.8/angular-route.js "></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.8/angular-resource.js "></script>
</head>

<body className='snippet-body' ng-app="myApp">

<body id="body-pd">
<header class="header" id="header">
    <div class="header_toggle"><i class='bx bx-menu' id="header-toggle"></i></div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <h1 class="m-auto">Quản lý BaloShops</h1>
    </nav>
    <div class="header_img"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt=""></div>
</header>
<div class="l-navbar" id="nav-bar">
    <nav class="nav">
        <div><a href="/admin" class="nav_logo"><i
                class='bx bx-layer nav_logo-icon'></i><span class="nav_logo-name">BaloShops</span></a>
            <div class="nav_list">

                <%--trangchu--%>
                <a href="#form" class="nav_link"><i class="fa fa-home" aria-hidden="true"></i><span class="nav_name">Trang chủ</span>
                </a>
                <%--trangchu--%>


                <a href="#" class="employee_link" onclick="toggleSubMenu(event)">
                    <nav class="nav_link">
                    <i
                            style="margin-right: 10px; margin-bottom: 25px"
                            class='bx bx-outline nav_icon'
                    ></i>
                    Sản phẩm
                    <ul class="sub_menu">
                        <li><a class="nav_name_child" href="">Sản Phẩm</a></li>
                        <li><a class="nav_name_child" href="">Chi Tiết Sản Phẩm</a></li>
                        <li><a class="nav_name_child" href="">Màu Sắc</a></li>
                        <li><a class="nav_name_child" href="">Chất Liệu</a></li>
                        <li><a class="nav_name_child" href="">Thương Hiệu</a></li>
                        <li><a class="nav_name_child" href="">Nhà Sản Xuất</a></li>
                        <li><a class="nav_name_child" href="">Kích Cỡ</a></li>
                        <li><a class="nav_name_child" href="">Kiểu Khóa</a></li>
                        <li><a class="nav_name_child" href="">Kiểu Ngăn</a></li>
                    </ul>
                    </nav>
                </a>


                <a href="#form" class="nav_link"><i
                        class='bx bx-user nav_icon'></i><span class="nav_name">Form</span> </a>
                <a href="#table" class="nav_link"><i
                        class='bx bx-male-female nav_icon'></i><span class="nav_name">Table</span> </a>
                <a href="#sanphams" class="nav_link"><i
                        class="fas fa-user-alt"></i><span class="nav_name">Nhân viên</span> </a>
                <a href="/chi-tiet-san-pham/hien-thi" class="nav_link"><i
                        class='bx bx-barcode-reader nav_icon'></i><span class="nav_name">Tài Khoản</span> </a>
                <a href="/gio-hang/hien-thi" class="nav_link"><i
                        class='bx bx-fingerprint nav_icon'></i><span class="nav_name">Gio Hang</span> </a>
                <a href="/gio-hang-chi-tiet/hien-thi" class="nav_link"><i class='bx bx-cart nav_icon'></i><span
                        class="nav_name">Ban
                                    Hang</span> </a>
                <a href="#" class="nav_link"><i class='bx bx-log-out nav_icon'></i> <span
                        class="nav_name">SignOut</span> </a>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Link</a></li>
                        <li><a class="dropdown-item" href="#">Another link</a></li>
                        <li><a class="dropdown-item" href="#">A third link</a></li>
                    </ul>
                </li>
            </div>
        </div>
    </nav>
</div>
<div>
    <div ng-view style="margin: 100px;"></div>
</div>
<script>
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/form', {
                templateUrl: './view/form.html'
            })
            .when('/sanphams', {
                templateUrl: './sanpham/sanphams.jsp'
            })
            .otherwise('/about', {
                templateUrl: './view/about.html'
            })
    });
</script>

<script type='text/javascript'>
    document.addEventListener("DOMContentLoaded", function (event) {
        const showNavbar = (toggleId, navId, bodyId, headerId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId),
                bodypd = document.getElementById(bodyId),
                headerpd = document.getElementById(headerId)
            if (toggle && nav && bodypd && headerpd) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show')
                    toggle.classList.toggle('bx-x')
                    bodypd.classList.toggle('body-pd')
                    headerpd.classList.toggle('body-pd')
                })
            }
        }
        showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
        const linkColor = document.querySelectorAll('.nav_link')

        function colorLink() {
            if (linkColor) {
                linkColor.forEach(l => l.classList.remove('active'))
                this.classList.add('active')
            }
        }

        linkColor.forEach(l => l.addEventListener('click', colorLink))
    });

    function toggleSubMenu(event) {
        event.preventDefault();
        var subMenu = event.target.nextElementSibling;
        subMenu.style.display =
            subMenu.style.display === "block" ? "none" : "block";
    }

</script>
<script type='text/javascript'>
    var myLink = document.querySelector('a[href="#"]');
    myLink.addEventListener('click', function (e) {
        e.preventDefault();
    });
</script>

</body>
</body>

</html>