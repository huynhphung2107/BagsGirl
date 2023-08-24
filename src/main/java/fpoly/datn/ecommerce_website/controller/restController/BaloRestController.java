package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class BaloRestController {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IBaloRepository baloRepository;

    //hienthi
    @RequestMapping(value = "/balo/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(
                this.baloRepository.findAll().stream().map(
                        balo -> modelMapper.map(balo, Balo.class)
                ).collect(Collectors.toList())
                , HttpStatus.OK);
    }

    //hien thi get one
    @RequestMapping(value = "/balo", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.baloRepository.findById(id).get(), BaloDTO.class)
                , HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/balo", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody BaloDTO baloDTO) {
        return new ResponseEntity<>(baloRepository.save(
                modelMapper.map(baloDTO, Balo.class)
        )

                , HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/balo", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody BaloDTO baloDTO) {
        return new ResponseEntity<>(baloRepository.save(
                modelMapper.map(baloDTO, Balo.class)

        ), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/balo", method = RequestMethod.DELETE)
    public ResponseEntity<?> remove(@RequestParam("id") String id) {
        baloRepository.delete(baloRepository.findById(id).get());
        return new ResponseEntity<>("Delete Successfully!!!!!!", HttpStatus.NO_CONTENT);
    }


}
