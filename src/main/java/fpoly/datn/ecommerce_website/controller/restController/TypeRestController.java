package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.TypeDTO;
import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.service.serviceImpl.TypeServiceImpl;
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
public class TypeRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private TypeServiceImpl typeService;

    //GetAll
    @RequestMapping(value = "/type/", method = RequestMethod.GET)
    public ResponseEntity<List<TypeDTO>> getAll() {
        return new ResponseEntity<>(
                this.typeService.findAll()
                        .stream()
                        .map(type -> modelMapper.map(type, TypeDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    //GetOne
    @RequestMapping(value = "/type", method = RequestMethod.GET)
    public ResponseEntity<TypeDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.typeService.findById(id), TypeDTO.class)
                , HttpStatus.OK);
    }

    //Add
    @RequestMapping(value = "/type", method = RequestMethod.POST)
    public ResponseEntity<Type> save(@RequestBody TypeDTO typeDTO) {
        Type type = modelMapper.map(typeDTO, Type.class);
        return new ResponseEntity<>(
                this.typeService.save(type)
                , HttpStatus.OK);
    }

    //Update
    @RequestMapping(value = "/type", method = RequestMethod.PUT)
    public ResponseEntity<Type> update(@RequestBody TypeDTO typeDTO) {
        Type type = modelMapper.map(typeDTO, Type.class);
        return new ResponseEntity<>(
                this.typeService.save(type)
                , HttpStatus.OK);
    }

    //Delete
    @RequestMapping(value = "/type", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.typeService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfuly"
                , HttpStatus.OK);
    }

    //Validation Type Rest API
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
    //End
}
