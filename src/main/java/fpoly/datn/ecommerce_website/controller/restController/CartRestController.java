package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Cart;
import fpoly.datn.ecommerce_website.service.CartService;
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
import java.util.Map;

@RequestMapping("/api/manage")
@RestController
public class CartRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CartService cartService;

    //GetAll
    @RequestMapping(value = "/cart/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(cartService.findAll());
    }

    //PhanTrang
    @RequestMapping(value = "/cart/phanTrang", method = RequestMethod.GET)
    public ResponseEntity<?> phanTrang(@RequestParam(defaultValue = "0", name = "page")Integer page){
        return ResponseEntity.ok(cartService.findAllPhanTrang(page));
    }

    //GetOne
    @RequestMapping(value = "/cart", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam String id) {
        if(cartService.findById(id) != null){
            return ResponseEntity.ok(cartService.findById(id));

        }else{
            return ResponseEntity.ok("Không tìm thấy ID !!!");
        }
    }
//
    //Add
    @RequestMapping(value = "/cart", method = RequestMethod.POST)
    public ResponseEntity<Cart> add(@RequestBody @Valid CartDTO cartDTO) {
        return new ResponseEntity<>(
                this.cartService.save(cartDTO)
                , HttpStatus.OK);
    }
//
    //update
    @RequestMapping(value = "/cart", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody @Valid CartDTO cartDTO, @RequestParam String id) {
        if(cartService.findById(id) != null){
            return ResponseEntity.ok(cartService.update(cartDTO,id));

        }else{
            return ResponseEntity.ok("ID cần update không tồn tại, vui lòng kiểm tra lại ID !!");
        }

    }

    //delete
    @RequestMapping(value = "/cart", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        if(cartService.delete(id)){
            return ResponseEntity.ok("Xóa thành công!!");
        }else{
            return ResponseEntity.ok("id không tồn tại để xóa!!");
        }
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMesssage = error.getDefaultMessage();
            errors.put(fieldName, errorMesssage);
        });

        return errors;
    }
}
