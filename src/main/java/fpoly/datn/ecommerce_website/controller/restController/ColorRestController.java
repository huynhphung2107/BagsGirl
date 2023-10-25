package fpoly.datn.ecommerce_website.controller.restController;


import fpoly.datn.ecommerce_website.dto.ColorDTO;
import fpoly.datn.ecommerce_website.entity.Colors;

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

@RequestMapping("/api/manage")
@RestController
public class ColorRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ColorServiceImpl colorService;


    @RequestMapping(value = "/color/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPaginantion(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Colors> colorPage = colorService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (colorPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/color/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(

    ) {
        List<Colors> colorPage = colorService.findAll();
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
    public ResponseEntity<Colors> save(@RequestBody ColorDTO colorDTO) {
        Colors color = modelMapper.map(colorDTO, Colors.class);
        return new ResponseEntity<>(
                this.colorService.save(color)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/color", method = RequestMethod.PUT)
    public ResponseEntity<Colors> update(@RequestBody ColorDTO colorDTO) {
        Colors color = modelMapper.map(colorDTO, Colors.class);
        return new ResponseEntity<>(
                this.colorService.save(color)
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/color/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Colors> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
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

}


