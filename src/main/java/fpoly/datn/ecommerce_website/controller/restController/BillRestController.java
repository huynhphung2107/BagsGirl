package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BillsDTO;
import fpoly.datn.ecommerce_website.service.IBillService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/manage")
public class BillRestController {

    @Autowired
    private IBillService billService;
    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping(value = "/bills", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(required = false) Integer pageNum,
            @RequestParam(required = false) Integer pageSize) {
        if (pageNum == null && pageSize == null) {
            return new ResponseEntity<>(this.billService.getAll(), HttpStatus.OK);
        }
        return new ResponseEntity<>(this.billService.getPagination(pageNum, pageSize), HttpStatus.OK);
    }

    @RequestMapping(value = "/bills", method = RequestMethod.POST)
    public ResponseEntity<?> save(
            @RequestBody BillsDTO billsDTO) {
        return new ResponseEntity<>(this.billService.save(billsDTO), HttpStatus.OK);
    }
}
