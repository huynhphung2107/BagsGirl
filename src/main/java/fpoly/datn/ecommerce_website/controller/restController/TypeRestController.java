package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.TypeDTO;
import fpoly.datn.ecommerce_website.entity.Types;
import fpoly.datn.ecommerce_website.service.serviceImpl.TypeServiceImpl;
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

import java.util.Comparator;
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
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(
                this.typeService.findAll()
                        .stream()
                        .map(type -> modelMapper.map(type, TypeDTO.class))
                        .sorted(Comparator.comparing(TypeDTO::getTypeCode)) // Sắp xếp theo trường "name"
                        .collect(Collectors.toList())
                , HttpStatus.OK
        );
    }

    //PhanTrang
    @RequestMapping(value = "/type/panagition", method = RequestMethod.GET)
    public ResponseEntity<?> phanTrang(@RequestParam(name = "page", defaultValue = "0") int pageNum,
                                       @RequestParam(name = "size", defaultValue = "10") int pageSize){
        return ResponseEntity.ok(typeService.findAllPhanTrang(pageNum, pageSize));
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
    public ResponseEntity<Types> save(@RequestBody TypeDTO typeDTO) {
        Types type = modelMapper.map(typeDTO, Types.class);
        return new ResponseEntity<>(
                this.typeService.save(type)
                , HttpStatus.OK);
    }

//    Update
//    @RequestMapping(value = "/type", method = RequestMethod.PUT)
//    public ResponseEntity<Type> update(@RequestBody @Valid TypeDTO typeDTO) {
//        Type type = modelMapper.map(typeDTO, Type.class);
//        return new ResponseEntity<>(
//                this.typeService.save(type)
//                , HttpStatus.OK);
//    }
    @RequestMapping(value = "/type", method = RequestMethod.PUT)
    public ResponseEntity<Types> update(@Valid @RequestParam String id, @RequestBody TypeDTO typeDTO) {
        Types type = modelMapper.map(typeDTO, Types.class);
        type.setTypeId(id);
        return new ResponseEntity<>(
                this.typeService.update(id,type)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/type/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Types> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(typeService.updateStatus(id, status),
                HttpStatus.OK);

    }

    //Delete
    @RequestMapping(value = "/type", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam @Valid String id) {
        this.typeService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfuly"
                , HttpStatus.OK);
    }
    //End
}
