package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.dto.TypeDTO;
import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.service.serviceImpl.TypeServiceImpl;
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
public class TypeRestController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private TypeServiceImpl typeService;

    @RequestMapping(value = "/type/", method = RequestMethod.GET)
    public ResponseEntity<List<TypeDTO>> getAll() {
        return new ResponseEntity<>(
                this.typeService.findAll()
                        .stream()
                        .map(type -> modelMapper.map(type, TypeDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/type", method = RequestMethod.GET)
    public ResponseEntity<TypeDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.typeService.findByID(id), TypeDTO.class)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/type", method = RequestMethod.POST)
    public ResponseEntity<Type> save(@RequestBody TypeDTO typeDTO) {
        Type type = modelMapper.map(typeDTO, Type.class);
        return new ResponseEntity<>(
                this.typeService.save(type)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/type", method = RequestMethod.PUT)
    public ResponseEntity<Type> update(@RequestBody TypeDTO typeDTO) {
        Type type = modelMapper.map(typeDTO, Type.class);
        return new ResponseEntity<>(
                this.typeService.save(type)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/type", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.typeService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfuly"
                , HttpStatus.OK);
    }
}
