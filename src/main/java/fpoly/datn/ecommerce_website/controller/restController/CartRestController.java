package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Carts;
import fpoly.datn.ecommerce_website.service.serviceImpl.CartServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/manage")
@RestController
public class CartRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CartServiceImpl cartService;

    //GetAll
    @RequestMapping(value = "/cart/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(cartService.findAll());
    }

    //PhanTrang
    @RequestMapping(value = "/cart/panagition", method = RequestMethod.GET)
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
    public ResponseEntity<Carts> add(@RequestBody @Valid CartDTO cartDTO) {
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


}
