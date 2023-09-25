package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.service.serviceImpl.BaloServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class BaloRestController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private BaloServiceImpl  baloService;

    public BaloRestController(BaloServiceImpl baloService) {
        this.baloService = baloService;
    }

    //hienthi
    @RequestMapping(value = "/balo/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>
                (
                        this.baloService.findAll().stream()
                                .map(baloService::mapBaloToBaloDTO)
                                .collect(Collectors.toList())
                        , HttpStatus.OK
    );
    }

    //hien thi get one
    @RequestMapping(value = "/balo", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.baloService.findById(id), BaloDTO.class)
                , HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/balo", method = RequestMethod.POST)
    public ResponseEntity<?> add(@Valid @RequestBody Balo balo) {
        return new ResponseEntity<>(baloService.save(
               balo
        )

                , HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/balo", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody BaloDTO baloDTO) {
        return new ResponseEntity<>(baloService.save(
                modelMapper.map(baloDTO, Balo.class)

        ), HttpStatus.OK);
    } @RequestMapping(value = "/balo/update-status", method = RequestMethod.PUT)
    public ResponseEntity<?> updateStatus(@Valid @RequestParam String baloID, @RequestParam int status) {
        return new ResponseEntity<>(baloService.updateBaloStatus(
               baloID, status

        ), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/balo", method = RequestMethod.DELETE)
    public ResponseEntity<?> remove(@RequestParam("id") String id) {
        baloService.delete(baloService.findById(id).getId());
        return new ResponseEntity<>("Delete Successfully!!!!!!", HttpStatus.NO_CONTENT);
    }


    //Validation Balo Rest API

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
    //End
}
