package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.CompartmentDTO;
import fpoly.datn.ecommerce_website.entity.Compartment;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
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

@RestController
@RequestMapping("/api/manage")
public class CompartmentRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ServiceGenarel<Compartment> serviceGenarel;

    //hien thi
    @RequestMapping(value = "/compartment/", method = RequestMethod.GET)
    public ResponseEntity<List<CompartmentDTO>> getAll() {
        return new ResponseEntity<>(
                this.serviceGenarel.findAll()
                        .stream()
                        .map(compartment -> modelMapper.map(compartment, CompartmentDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    //getOne
    @RequestMapping(value = "/compartment", method = RequestMethod.GET)
    public ResponseEntity<CompartmentDTO> getOne(@RequestParam String id) {

        return new ResponseEntity<>(
                modelMapper.map(this.serviceGenarel.findById(id), CompartmentDTO.class)
                , HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/compartment", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody @Valid CompartmentDTO compartmentDTO
    ) {
        return new ResponseEntity<>(
                serviceGenarel.save(
                        modelMapper.map(compartmentDTO, Compartment.class))
                , HttpStatus.OK);


    }

    //update
    @RequestMapping(value = "/compartment", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody CompartmentDTO compartmentDTO) {
        return new ResponseEntity<>(serviceGenarel.save(
                modelMapper.map(compartmentDTO, Compartment.class)

        ), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/compartment", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam("id") String id) {
        serviceGenarel.delete(serviceGenarel.findById(id).getId());
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
