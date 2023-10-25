package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.MaterialDTO;
import fpoly.datn.ecommerce_website.entity.Materials;
import fpoly.datn.ecommerce_website.service.serviceImpl.MaterialServiceImpl;
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
import java.util.stream.Collectors;


@RequestMapping("/api/manage")
@RestController
public class MaterialRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MaterialServiceImpl materialService;

    //getAll
    @RequestMapping(value = "/material/", method = RequestMethod.GET)
    public ResponseEntity<List<MaterialDTO>> getAll() {
        return new ResponseEntity<>(
                this.materialService.findAll()
                        .stream()
                        .map(material -> modelMapper.map(material, MaterialDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }


    //GetAllPage
    @RequestMapping(value = "/material/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPage(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Materials> materialPage = materialService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (materialPage, HttpStatus.OK);
    }

    //GetOne
    @RequestMapping(value = "/material", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam String id) {
        if (materialService.findById(id) != null) {
            return ResponseEntity.ok(materialService.findById(id));

        } else {
            return ResponseEntity.ok("Không tìm thấy ID !!!");
        }
    }

    //Add
    @RequestMapping(value = "/material", method = RequestMethod.POST)
    public ResponseEntity<Materials> add(@RequestBody @Valid MaterialDTO materialDTO) {
        Materials material = modelMapper.map(materialDTO, Materials.class);
        return new ResponseEntity<>(
                this.materialService.save(material)
                , HttpStatus.OK);
    }


    @RequestMapping(value = "/material", method = RequestMethod.PUT)
    public ResponseEntity<Materials> update(@RequestBody @Valid MaterialDTO materialDTO) {
        Materials material = modelMapper.map(materialDTO, Materials.class);
        return new ResponseEntity<>(
                this.materialService.save(material)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/material/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Materials> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(materialService.updateStatus(id, status),
                HttpStatus.OK);

    }

    //delete
    @RequestMapping(value = "/material", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        return new ResponseEntity<>(this.materialService.delete(id), HttpStatus.OK);

    }
}
