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
        return new ResponseEntity<>("Delete Successfully!!!!!!", HttpStatus.OK);
    }

    //validate
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
