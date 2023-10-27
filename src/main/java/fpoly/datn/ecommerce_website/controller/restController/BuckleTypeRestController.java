package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BuckleTypeDTO;
import fpoly.datn.ecommerce_website.dto.TypeDTO;
import fpoly.datn.ecommerce_website.entity.BuckleTypes;
import fpoly.datn.ecommerce_website.entity.Types;
import fpoly.datn.ecommerce_website.service.BuckleTypeService;
import fpoly.datn.ecommerce_website.service.serviceImpl.BuckleTypeServiceImpl;
import jakarta.validation.Valid;
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

@RestController
@RequestMapping("/api/manage")
public class BuckleTypeRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BuckleTypeService buckleTypeService;

    //hien thi
    @RequestMapping(value = "/buckletype/", method = RequestMethod.GET)
    public ResponseEntity<List<BuckleTypeDTO>> getAll() {
        return new ResponseEntity<>(
                this.buckleTypeService.findAll()
                        .stream()
                        .map(buckletype -> modelMapper.map(buckletype, BuckleTypeDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    //phan trang
    @RequestMapping(value = "/buckletype/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> phanTrang(@RequestParam(name = "page", defaultValue = "0") int pageNum,
                                       @RequestParam(name = "size", defaultValue = "10") int pageSize){
        return ResponseEntity.ok(buckleTypeService.findAllPagination(pageNum, pageSize));
    }

    @RequestMapping(value = "/buckletype", method = RequestMethod.GET)
    public ResponseEntity<BuckleTypeDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.buckleTypeService.findById(id), BuckleTypeDTO.class)
                , HttpStatus.OK);
    }


    //add
    @RequestMapping(value = "/buckletype", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody @Valid BuckleTypeDTO buckletypeDTO
    ) {
        return new ResponseEntity<>(
                buckleTypeService.save(
                        modelMapper.map(buckletypeDTO, BuckleTypes.class))
                , HttpStatus.OK);


    }

    //update
    @RequestMapping(value = "/buckletype", method = RequestMethod.PUT)
    public ResponseEntity<BuckleTypes> update(@Valid @RequestParam String id, @RequestBody BuckleTypeDTO buckleTypeDTO) {
        BuckleTypes type = modelMapper.map(buckleTypeDTO, BuckleTypes.class);
        type.setBuckleTypeId(id);
        return new ResponseEntity<>(
                this.buckleTypeService.update(id,type)
                , HttpStatus.OK);
    }

    //update Status
    @RequestMapping(value = "/buckletype/update-status", method = RequestMethod.PUT)
    public ResponseEntity<?> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(buckleTypeService.updateStatus(id, status),
                HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/buckletype", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam("id") String id) {
        buckleTypeService.delete(id);
        return new ResponseEntity<>("Delete Successfully!", HttpStatus.OK);
    }

}
