<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>BaloShops - Đăng nhập</title>
<link rel="stylesheet" href="Frontend/css/login.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<style>
		@import url(https://fonts.googleapis.com/css?family=Roboto:300);

		.login-page {
			width: 520px;
			padding: 6% 0 0;
			margin: auto;
		}
		.form {
			position: relative;
			z-index: 1;
			background: #FFFFFF;
			max-width: 520px;
			margin: 0 auto 100px;
			padding: 45px;
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
		}


		.form input[type=text], .form input[type=password] {
			font-family: "Roboto", sans-serif;
			outline: 0;
			background: #ffffff;
			width: 100%;
			border: 2;
			margin: 0 0 15px;
			padding: 15px;
			box-sizing: border-box;
			font-size: 14px;
		}
		#submit{
			font-family: "Roboto", sans-serif;
			text-transform: uppercase;
			outline: 0;
			background: #4CAF50;
			width: 100%;
			border: 0;
			padding: 15px;
			color: #FFFFFF;
			font-size: 14px;
			-webkit-transition: all 0.3 ease;
			transition: all 0.3 ease;
			cursor: pointer;
		}
		.form button:hover,.form button:active,.form button:focus {
			background: #43A047;
		}
		.form .message, #label {
			/*   margin: 15px 0 0; */
			color: #191717;
			font-size: 15px;
			padding-bottom: 10px;
			font-family: "Roboto", sans-serif;
			text-align: center;
		}
		.form .message a {
			color: #4CAF50;
			text-decoration: none;
			text-align: center;
		}
		.form .register-form {
			display: none;
		}
		.container {
			position: relative;
			z-index: 1;
			max-width: 300px;
			margin: 0 auto;
		}
		.container:before, .container:after {
			content: "";
			display: block;
			clear: both;
		}
		.container .info {
			margin: 50px auto;
			text-align: center;
		}
		.container .info h1 {
			margin: 0 0 15px;
			padding: 0;
			font-size: 36px;
			font-weight: 300;
			color: #1a1a1a;
		}
		.container .info span {
			color: #4d4d4d;
			font-size: 12px;
		}
		.container .info span a {
			color: #000000;
			text-decoration: none;
		}
		.container .info span .fa {
			color: #EF3B3A;
		}
		body {
			background: whitesmoke; /* fallback for old browsers */
			/*background: -webkit-linear-gradient(right, #76b852, #8DC26F);*/
			/*background: -moz-linear-gradient(right, #76b852, #8DC26F);*/
			/*background: -o-linear-gradient(right, #76b852, #8DC26F);*/
			/*background: linear-gradient(to left, #76b852, #8DC26F);*/
			font-family: "Roboto", sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		.error {
			color: red;
		}

		.alert alert-danger {
			text-align: center;
		}
	</style>
</head>

<body>


	<c:set var="contextPath" value="${pageContext.request.contextPath}" />
	<div class="login-page">
		<div class="form">
		    <h2 class="form-signin-heading" style="text-align: center">BaloShop - Đăng nhập</h2>
		    <hr>
			<c:if test="${param.error != null}">
				<div class="alert alert-danger">
					<p>Tên đăng nhập hoặc mật khẩu không đúng.</p>
				</div>
			</c:if>
			<c:if test="${param.logout != null}">
				<div class="alert alert-success">
					<p>Bạn đã đăng xuất thành công.</p>
				</div>
			</c:if>
			<c:if test="${param.accessDenied != null}">
				<div class="alert alert-danger">
					<p>Bạn không có quyền truy cập vào trang này</p>
				</div>
			</c:if>

			<form class="login-form" method="POST" action="${contextPath}/login">
			    
				<input type="text" placeholder="Email" name="email" required="required" style="padding:  10px;"/> 
				
				<input type="password" placeholder="Mật khẩu" name="password" required="required" style="padding:  10px;" /> 
				
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
				
                <label style="padding-right: 130px; font-size: 15px;" id="label">
                    <input type="checkbox" class="form-check-input" id="" name="remember-me">
                     Duy trì đăng nhập</label>
				
				<input id="submit" type="submit" value="ĐĂNG NHẬP">
				<p class="message" style="font-size: 18; padding-top:10px"> Chưa có tài khoản? <a href="<c:url value='/register'/> ">Tạo tài khoản mới</a></p>
			</form>
		</div>
	</div>


	<%-- <div class="main-w3layouts wrapper">
		<h1>ĐĂNG NHẬP</h1>
		<div class="main-agileinfo">
			<div class="agileits-top">

				<c:if test="${param.error != null}">
					<div class="alert alert-danger">
						<p>Tên đăng nhập hoặc mật khẩu không đúng.</p>
					</div>
				</c:if>
				<c:if test="${param.logout != null}">
					<div class="alert alert-success">
						<p>Bạn đã đăng xuất thành công.</p>
					</div>
				</c:if>
				<c:if test="${param.accessDenied != null}">
					<div class="alert alert-danger">
						<p>Bạn không có quyền truy cập vào trang này</p>
					</div>
				</c:if>

				<!-- cái required có sẵn, nó bắt mấy lỗi cơ bản, có thể xóa đi rồi validate = javascript cũng đc -->
				<form method="POST" action="${contextPath}/login">
					<input class="text" type="text" name="email"
						placeholder="Tên đăng nhập" required> <input class="text"
						type="password" name="password" placeholder="Mật khẩu" required>
					<input type="hidden" name="${_csrf.parameterName}"
						value="${_csrf.token}" /> <input type="submit" value="ĐĂNG NHẬP">
				</form>
				<p>
					Chưa có Tài Khoản? <a href="${contextPath}/register"> Đăng ký!</a>
				</p>
			</div>
		</div>
		<!-- copyright -->
		<div class="colorlibcopy-agile">
			<p>© 2018 All rights reserved | Design by Group 14 - Hanoi
				University of Science and Technology</p>
		</div>
	</div> --%>
	<script
		src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

</body>
</html>