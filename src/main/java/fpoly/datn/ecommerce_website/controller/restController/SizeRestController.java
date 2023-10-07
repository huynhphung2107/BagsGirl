package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.SizeDTO;
import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.service.serviceImpl.SizeServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
public class SizeRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private SizeServiceImpl sizeService;


    @RequestMapping(value = "/size/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Size> sizePage = sizeService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (sizePage, HttpStatus.OK);
    }

    @RequestMapping(value = "/size", method = RequestMethod.GET)
    public ResponseEntity<SizeDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.sizeService.findById(id), SizeDTO.class)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/size", method = RequestMethod.POST)
    public ResponseEntity<Size> save(@RequestBody SizeDTO sizeDTO) {
        Size size = modelMapper.map(sizeDTO, Size.class);
        return new ResponseEntity<>(
                this.sizeService.save(size)
                , HttpStatus.OK
        );
    }


    @RequestMapping(value = "/size", method = RequestMethod.PUT)
    public ResponseEntity<Size> update(@RequestBody SizeDTO sizeDTO) {
        Size size = modelMapper.map(sizeDTO, Size.class);
        return new ResponseEntity<>(
                this.sizeService.save(size)
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/size/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Size> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(sizeService.updateStatus(id, status),
                HttpStatus.OK);

    }

    @RequestMapping(value = "/size", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.sizeService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfully"
                , HttpStatus.OK
        );
    }

    // validate
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
