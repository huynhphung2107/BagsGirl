package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BaloDetailDTO;
import fpoly.datn.ecommerce_website.dto.Balo_BaloDetailDTO;
import fpoly.datn.ecommerce_website.entity.BaloDetail;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import fpoly.datn.ecommerce_website.service.serviceImpl.BaloDetailServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/manage")
public class BaloDetailRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BaloDetailServiceImpl baloDetailService;

    @RequestMapping(value = "/balo/{baloID}/balodetails", method = RequestMethod.GET)
    public ResponseEntity<?> getAllbyBalo(@PathVariable String baloID) {
        return new ResponseEntity<>(
                this.baloDetailService.findAllByBalo(baloID)
                        .stream()
                        .map(baloDetail -> modelMapper.map(baloDetail, BaloDetailDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK
        );

    }



    @RequestMapping(value = "/balo-detail/search", method = RequestMethod.GET)
    public ResponseEntity<?> findByKeyword(@RequestParam String keyword) {
        return new ResponseEntity<>(
               this.baloDetailService.findByKeyword(keyword) .stream()
                       .map(baloDetail -> modelMapper.map(baloDetail, BaloDetailDTO.class))
                       .collect(Collectors.toList())
                , HttpStatus.OK);
    }


}
