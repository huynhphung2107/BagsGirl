package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.SizeDTO;
import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.service.serviceImpl.SizeServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class SizeRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private SizeServiceImpl sizeService;


    @RequestMapping(value = "/size/", method = RequestMethod.GET)
    public ResponseEntity<List<SizeDTO>> getAll() {
        return new ResponseEntity<>(
                this.sizeService.findAll()
                        .stream()
                        .map(size -> modelMapper.map(size, SizeDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK
        );
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

    @RequestMapping(value = "/size", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.sizeService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfully"
                , HttpStatus.OK
        );
    }
}
