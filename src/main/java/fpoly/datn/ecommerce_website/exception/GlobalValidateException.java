package fpoly.datn.ecommerce_website.exception;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalValidateException {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    //Anotation này đánh dấu cho func này sẽ được thực thi khi nhận được Trang thái của HTTP là Bad Request (BAD_REQUEST khi yêu cầu URL không chạy đúng)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    //Khi validate không thành công nhờ cái thằng này mới bắt đc các exception mà chương trình ném ra
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>(); //Dùng map để lưu các error khi nhận đc từ các exception

        ex.getBindingResult().getAllErrors().forEach(error -> {  //Duyệt list error mà thằng MethodArgumentNotValidException trả ra
            String fieldName = ((FieldError) error).getField();  //Cái này là tên thuộc tính của thằng đối tượng validate ko thành công
            String errorMesssage = error.getDefaultMessage(); // Còn đây là mô tả của thuộc tính đó (mặc định sẽ là của spring, có thể custom message bên dto)
            errors.put(fieldName, errorMesssage);
        });

        return errors;
    }
}
