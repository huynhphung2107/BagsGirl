<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="../static/iphone14" type="image/x-icon" />
    <title>CellPhonex</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
    />
    <link
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
            rel="stylesheet"
    />
    <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    ></script>
    <script
            src="https://kit.fontawesome.com/600f0dcfd4.js"
            crossorigin="anonymous"
    ></script>
    <style>
        ::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

        :root {
            --header-height: 3rem;
            --nav-width: 68px;
            --first-color: rgb(45, 119, 154);
            --first-color-light: white;
            --white-color: #f7f6fb;
            --body-font: "Nunito", sans-serif;
            --normal-font-size: 1rem;
            --z-fixed: 100;
        }

        *,
        ::before,
        ::after {
            box-sizing: border-box;
        }

        body {
            position: relative;
            margin: var(--header-height) 0 0 0;
            padding: 0 1rem;
            font-family: var(--body-font);
            font-size: var(--normal-font-size);
            transition: 0.5s;
        }

        a {
            text-decoration: none;
        }

        .header {
            width: 100%;
            height: var(--header-height);
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            background-color: var(--white-color);
            z-index: var(--z-fixed);
            transition: 0.5s;
        }

        .header_toggle {
            color: var(--first-color);
            font-size: 1.5rem;
            cursor: pointer;
        }

        .header_img {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            overflow: hidden;
        }

        .header_img img {
            width: 40px;
        }

        .l-navbar {
            position: fixed;
            top: 0;
            left: -30%;
            width: var(--nav-width);
            height: 100vh;
            background-color: var(--first-color);
            padding: 0.5rem 1rem 0 0;
            transition: 0.5s;
            z-index: var(--z-fixed);
        }

        .nav {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
        }

        .nav_logo,
        .nav_link {
            display: grid;
            grid-template-columns: max-content max-content;
            align-items: center;
            column-gap: 1rem;
            padding: 0.5rem 0 0.5rem 1.5rem;
        }

        .nav_logo {
            margin-bottom: 2rem;
        }

        .nav_logo-icon {
            font-size: 1.25rem;
            color: var(--white-color);
        }

        .nav_logo-name {
            color: var(--white-color);
            font-weight: 700;
        }

        .nav_link {
            position: relative;
            color: var(--first-color-light);
            margin-bottom: 1.5rem;
            transition: 0.02s;
        }

        .nav_name {
            display: block;
        }
        .nav_link:hover {
            color: var(--white-color);
            background-color: gray;
        }

        .nav_icon {
            font-size: 1.25rem;
        }

        .show {
            left: 0;
        }

        .body-pd {
            padding-left: calc(var(--nav-width) + 1rem);
        }

        .active {
            color: var(--white-color);
        }

        .active::before {
            content: "";
            position: absolute;
            left: 0;
            width: 2px;
            height: 32px;
            background-color: var(--white-color);
        }

        .height-100 {
            height: 100vh;
        }

        @media screen and (min-width: 768px) {
            body {
                margin: calc(var(--header-height) + 1rem) 0 0 0;
                padding-left: calc(var(--nav-width) + 2rem);
            }

            .header {
                height: calc(var(--header-height) + 1rem);
                padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
            }

            .header_img {
                width: 40px;
                height: 40px;
            }

            .header_img img {
                width: 45px;
            }

            .l-navbar {
                left: 0;
                padding: 1rem 1rem 0 0;
            }

            .show {
                width: calc(var(--nav-width) + 156px);
            }

            .body-pd {
                padding-left: calc(var(--nav-width) + 188px);
            }
        }
    </style>
</head>

<body className="snippet-body">
<body id="body-pd">
<header class="header" id="header">
    <div class="header_toggle">
        <i class="bx bx-menu" id="header-toggle"></i>
    </div>
    <div class="header_img">
        <img
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                alt=""
        />
    </div>
</header>
<div class="l-navbar" id="nav-bar">
    <nav class="nav">
        <div><a href="/admin" class="nav_logo"><i
                class='bx bx-layer nav_logo-icon'></i><span class="nav_logo-name">BaloShops</span></a>
            <div class="nav_list">
                <a href="#" class="employee_link" onclick="toggleSubMenu(event)">
                    <i
                            style="margin-right: 10px; margin-bottom: 25px"
                            class="fas fa-user-alt"
                    ></i>
                    Nhân viên
                    <i class="fas fa-align-justify"></i>
                    <ul class="sub_menu">
                        <li>
                            <a class="nav_name_child" href="nhan-vien/hien-thi"
                            >Danh sách</a
                            >
                        </li>
                        <li><a class="nav_name_child">Mục con1</a></li>
                        <li><a class="nav_name_child">Mục con2</a></li>
                    </ul>
                </a>
                <style>
                    .sub_menu li {
                        list-style-type: style circle;
                        color: white;
                        margin: 5px;
                    }
                    .employee_link:focus + .sub_menu {
                        display: block;
                    }
                    .sub_menu {
                        display: none;
                        margin-left: 20px;
                    }
                    .employee_link {
                        position: relative;
                        color: var(--first-color-light);
                        margin-bottom: 1.5rem;
                        transition: 0.3s;
                    }
                    .employee_link:hover {
                        color: var(--white-color);
                    }
                    .employee_link i {
                        margin-left: 25px;
                    }
                    .nav_name_child {
                        color: white;
                    }
                    .nav_name_child:hover {
                        color: white;
                        background-color: red;
                        display: inline;
                        cursor: pointer;
                    }
                </style>

                <!-- <a class="nav_link">
                  <ul class="sub-menu">
                    <i class="bx bx-user nav_icon"></i
                    ><span class="nav_name">Nhân viên</span>
                  </ul>
                </a> -->
                <a href="/khach-hang/hien-thi" class="nav_link"
                ><i class="bx bx-male-female nav_icon"></i
                ><span class="nav_name">Khách hàng</span>
                </a>
                <a href="/sanpham/hienthi" class="nav_link"
                ><i class="bx bx-outline nav_icon"></i
                ><span class="nav_name">Sản phẩm</span>
                </a>
                <a href="/chi-tiet-san-pham/hien-thi" class="nav_link"
                ><i class="bx bx-barcode-reader nav_icon"></i
                ><span class="nav_name">Chi tiết sản phẩm</span>
                </a>
                <a href="/gio-hang/hien-thi" class="nav_link"
                ><i class="bx bx-fingerprint nav_icon"></i
                ><span class="nav_name">Gio Hang</span>
                </a>
                <a href="/gio-hang-chi-tiet/hien-thi" class="nav_link"
                ><i class="bx bx-cart nav_icon"></i
                ><span class="nav_name">Ban Hang</span>
                </a>
                <a href="#" class="employee_link" onclick="toggleSubMenu(event)">
                    <i
                            style="margin-right: 10px; margin-bottom: 25px"
                            class="bx bx-male-female nav_icon"
                    ></i>
                    Danh mục <i class="fas fa-align-justify"></i>
                    <ul class="sub_menu">
                        <li><a class="nav_name_child">Màu sắc</a></li>
                        <li><a class="nav_name_child">Chất liệu</a></li>
                        <li><a class="nav_name_child">Hãng</a></li>
                        <li><a class="nav_name_child">Size</a></li>
                        <li><a class="nav_name_child">Image</a></li>
                    </ul>
                </a>
                <a href="#" class="nav_link"
                ><i class="bx bx-log-out nav_icon"></i>
                    <span class="nav_name">SignOut</span>
                </a>
            </div>
        </div>
    </nav>
    <img style="width: 100%;height: 100%" src="../client/image/hinh%20nen.png">

</div>


<script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
></script>
<script type="text/javascript" src="#"></script>
<script type="text/javascript" src="#"></script>
<script type="text/javascript" src="#"></script>
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function (event) {
        const showNavbar = (toggleId, navId, bodyId, headerId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId),
                bodypd = document.getElementById(bodyId),
                headerpd = document.getElementById(headerId);
            if (toggle && nav && bodypd && headerpd) {
                toggle.addEventListener("click", () => {
                    nav.classList.toggle("show");
                    toggle.classList.toggle("bx-x");
                    bodypd.classList.toggle("body-pd");
                    headerpd.classList.toggle("body-pd");
                });
            }
        };
        showNavbar("header-toggle", "nav-bar", "body-pd", "header");
        const linkColor = document.querySelectorAll(".nav_link");

        function colorLink() {
            if (linkColor) {
                linkColor.forEach((l) => l.classList.remove("active"));
                this.classList.add("active");
            }
        }

        linkColor.forEach((l) => l.addEventListener("click", colorLink));
    });
</script>
<script type="text/javascript">
    var myLink = document.querySelector('a[href="#"]');
    myLink.addEventListener("click", function (e) {
        e.preventDefault();
    });
</script>
<script>
    function toggleSubMenu(event) {
        event.preventDefault();
        var subMenu = event.target.nextElementSibling;
        subMenu.style.display =
            subMenu.style.display === "block" ? "none" : "block";
    }
</script>
</body>
</body>
</html>
