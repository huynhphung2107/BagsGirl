package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.SizeDTO;
import fpoly.datn.ecommerce_website.entity.Sizes;
import fpoly.datn.ecommerce_website.service.serviceImpl.SizeServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/manage")
@RestController
public class SizeRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private SizeServiceImpl sizeService;


    @RequestMapping(value = "/size/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPagination(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "15") int pageSize
    ) {
        Page<Sizes> sizePage = sizeService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (sizePage, HttpStatus.OK);
    }

    @RequestMapping(value = "/size/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(

    ) {
        List<Sizes> sizePage = sizeService.findAll();
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
    public ResponseEntity<Sizes> save(@RequestBody SizeDTO sizeDTO) {
        Sizes size = modelMapper.map(sizeDTO, Sizes.class);

        return new ResponseEntity<>(
                this.sizeService.save(size)
                , HttpStatus.OK
        );
    }


    @RequestMapping(value = "/size", method = RequestMethod.PUT)
    public ResponseEntity<Sizes> update(@RequestBody SizeDTO sizeDTO) {
        Sizes size = modelMapper.map(sizeDTO, Sizes.class);
        return new ResponseEntity<>(
                this.sizeService.save(size)
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/size/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Sizes> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
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

}
