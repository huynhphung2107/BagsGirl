package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BuckleTypeDTO;
import fpoly.datn.ecommerce_website.dto.CompartmentDTO;
import fpoly.datn.ecommerce_website.entity.BuckleType;
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
public class BuckleTypeRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ServiceGenarel<BuckleType> serviceGenarel;

    //hien thi
    @RequestMapping(value = "/buckletype/", method = RequestMethod.GET)
    public ResponseEntity<List<BuckleTypeDTO>> getAll() {
        return new ResponseEntity<>(
                this.serviceGenarel.findAll()
                        .stream()
                        .map(buckletype -> modelMapper.map(buckletype, BuckleTypeDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/buckletype", method = RequestMethod.GET)
    public ResponseEntity<BuckleTypeDTO> getOne(@RequestParam String id) {

        return new ResponseEntity<>(
                modelMapper.map(this.serviceGenarel.findById(id), BuckleTypeDTO.class)
                , HttpStatus.OK);
    }


    //add
    @RequestMapping(value = "/buckletype", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody @Valid BuckleTypeDTO buckletypeDTO
    ) {
        return new ResponseEntity<>(
                serviceGenarel.save(
                        modelMapper.map(buckletypeDTO, BuckleType.class))
                , HttpStatus.OK);


    }

    //update
    @RequestMapping(value = "/buckletype", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody BuckleTypeDTO buckletypeDTO) {
        return new ResponseEntity<>(serviceGenarel.save(
                modelMapper.map(buckletypeDTO, BuckleType.class)

        ), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/buckletype", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam("id") String id) {
        serviceGenarel.delete(id);
        return new ResponseEntity<>("Delete Successfully!", HttpStatus.OK);
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
