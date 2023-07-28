<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
    <link rel='stylesheet' href='http://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/admin/admin.css">

    <style>
        body {
            padding-top: 80px;
        }

        #sidebar {
            position: fixed;
            top: 50px;
            left: 220px;
            width: 220px;
            margin-left: -220px;
            border: none;
            border-radius: 0;
            overflow-y: auto;
            background-color: whitesmoke;
            bottom: 0;
            overflow-x: hidden;
            padding-bottom: 40px;
        }

        .side-bar > li > a {
            color: black;
            width: 220px;
        }

        th {
            text-align: center
        }

        .link > a {
            color: black;
            width: 220px;

        }

        .side-bar li a:hover,
        .side-bar li a:focus {
            background-color: dodgerblue;
        }

        .tmargin {
            margin-top: 15px;
        }

        .navbar-right .dropdown-menu {
            left: 0;
            right: auto;
        }

        .navbar-collapse .navbar-nav.navbar-right:last-child {
            margin-right: 0;
        }


        span.error {
            color: red;
            margin-left: 5px;
        }


        canvas {

            width: 900px !important;
            height: 450px !important;
        }
    </style>
</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top" style="background: black">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" style="margin-left: -90px;" href="<c:url value=""/>">Balo Shop - Trang Quản Trị</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="<c:url value="" />">
                        <span class="glyphicon glyphicon-user">&nbsp;</span>Xin chào: Huỳnh</a>
                </li>
                <li>
                    <a href="<c:url value="" />"><span class="glyphicon glyphicon-log-out"></span> Đăng xuất</a>
                </li>
            </ul>
        </div>
    </div>
</nav>