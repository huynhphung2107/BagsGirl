package fpoly.datn.ecommerce_website.controller.restController;


import fpoly.datn.ecommerce_website.dto.ShiftDTO;
import fpoly.datn.ecommerce_website.entity.Shifts;
import fpoly.datn.ecommerce_website.service.serviceImpl.ShiftServiceImpl;
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

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class ShiftRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ShiftServiceImpl shiftService;

    //GetAll
    @RequestMapping(value = "/shift/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
//        return ResponseEntity.ok(shiftService.findAll());

        return new ResponseEntity<>(
                this.shiftService.findAll()
                        .stream()
                        .map(shift -> modelMapper.map(shift, ShiftDTO.class))
                        .sorted(Comparator.comparing(ShiftDTO::getShiftCode)) // Sắp xếp theo trường "name"
                        .collect(Collectors.toList())
                , HttpStatus.OK
        );
    }

    //PhanTrang
    @RequestMapping(value = "/shift/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> phanTrang(@RequestParam(defaultValue = "0", name = "page")Integer page){
        return ResponseEntity.ok(shiftService.findAllPhanTrang(page));
    }

    //GetOne
    @RequestMapping(value = "/shift", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam String id) {
        if(shiftService.findById(id) != null){
            return ResponseEntity.ok(shiftService.findById(id));

        }else{
            return ResponseEntity.ok("Không tìm thấy ID !!!");
        }
    }

    //Add
    @RequestMapping(value = "/shift", method = RequestMethod.POST)
    public ResponseEntity<Shifts> add(@RequestBody @Valid ShiftDTO shiftDTO) {
        return new ResponseEntity<>(
                this.shiftService.save(shiftDTO)
                , HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/shift", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody @Valid ShiftDTO shiftDTO, @RequestParam String id) {
        if(shiftService.findById(id) != null){
            return ResponseEntity.ok(shiftService.update(shiftDTO,id));

        }else{
            return ResponseEntity.ok("ID cần update không tồn tại, vui lòng kiểm tra lại ID !!");
        }

    }

    //delete
    @RequestMapping(value = "/shift", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        if(shiftService.delete(id)){
            return ResponseEntity.ok("Xóa thành công!!");
        }else{
            return ResponseEntity.ok("id không tồn tại để xóa!!");
        }
    }
}
