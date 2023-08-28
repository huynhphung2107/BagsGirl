package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.ProducerDTO;
import fpoly.datn.ecommerce_website.entity.Producer;
import fpoly.datn.ecommerce_website.service.serviceImpl.ProducerServiceImpl;
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
public class ProducerRestController {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProducerServiceImpl producerService;

    //GetAll
    @RequestMapping(value = "/producer/", method = RequestMethod.GET)
    public ResponseEntity<List<ProducerDTO>> getAll() {
        return new ResponseEntity<>(
                this.producerService.findAll()
                        .stream()
                        .map(producer -> modelMapper.map(producer, ProducerDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    //GetOne
    @RequestMapping(value = "/producer", method = RequestMethod.GET)
    public ResponseEntity<ProducerDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.producerService.findById(id), ProducerDTO.class)
                , HttpStatus.OK);
    }

    //Add
    @RequestMapping(value = "/producer", method = RequestMethod.POST)
    public ResponseEntity<Producer> save(@Valid @RequestBody ProducerDTO producerDTO) {
        Producer producer = modelMapper.map(producerDTO, Producer.class);
        return new ResponseEntity<>(
                this.producerService.save(producer)
                , HttpStatus.OK);
    }

    //Update
    @RequestMapping(value = "/producer", method = RequestMethod.PUT)
    public ResponseEntity<Producer> update(@Valid @RequestBody ProducerDTO producerDTO) {
        Producer producer = modelMapper.map(producerDTO, Producer.class);
        return new ResponseEntity<>(
                this.producerService.save(producer)
                , HttpStatus.OK);
    }

    //Delete
    @RequestMapping(value = "/producer", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.producerService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfuly"
                , HttpStatus.OK);
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
