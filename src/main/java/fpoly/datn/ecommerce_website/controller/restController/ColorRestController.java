package fpoly.datn.ecommerce_website.controller.restController;


import fpoly.datn.ecommerce_website.dto.ColorDTO;
import fpoly.datn.ecommerce_website.dto.SizeDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.Color;

import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.service.serviceImpl.ColorServiceImpl;
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
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class ColorRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ColorServiceImpl colorService;

    @RequestMapping(value = "/color/", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPaginantion(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Color> colorPage = colorService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (colorPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/color/get-all", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(

    ) {
        List<Color> colorPage = colorService.findAll();
        return new ResponseEntity<>
                (colorPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/color", method = RequestMethod.GET)
    public ResponseEntity<ColorDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.colorService.findById(id), ColorDTO.class)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/color", method = RequestMethod.POST)
    public ResponseEntity<Color> save(@RequestBody ColorDTO colorDTO) {
        Color color = modelMapper.map(colorDTO, Color.class);
        return new ResponseEntity<>(
                this.colorService.save(color)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/color", method = RequestMethod.PUT)
    public ResponseEntity<Color> update(@RequestBody ColorDTO colorDTO) {
        Color color = modelMapper.map(colorDTO, Color.class);
        return new ResponseEntity<>(
                this.colorService.save(color)
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/color/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Color> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(colorService.updateStatus(id, status),
                HttpStatus.OK);

    }


    @RequestMapping(value = "/color", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.colorService.delete(id);
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


