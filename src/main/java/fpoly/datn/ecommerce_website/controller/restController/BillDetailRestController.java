package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BillDetailsDTO;
import fpoly.datn.ecommerce_website.service.IBillDetailsService;
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
public class BillDetailRestController {

    @Autowired
    private IBillDetailsService iBillDetailsService;
    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping(value = "/bill-details/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(required = false) Integer pageNum,
            @RequestParam(required = false) Integer pageSize) {
        if (pageNum == null && pageSize == null) {
            return new ResponseEntity<>(this.iBillDetailsService.getAll(), HttpStatus.OK);
        }
        return new ResponseEntity<>(this.iBillDetailsService.getPagination(pageNum, pageSize), HttpStatus.OK);
    }

    @RequestMapping(value = "/bill-details/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPagination(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "15") int pageSize,
            @RequestParam(name ="status", defaultValue = "") String status,
            @RequestParam(name ="search", defaultValue = "") String search){
        return new ResponseEntity<>(this.iBillDetailsService.getPaginationStatus(search, status, pageNum, pageSize), HttpStatus.OK);
    }

    @RequestMapping(value = "/bill-details", method = RequestMethod.POST)
    public ResponseEntity<?> save(
            @RequestBody BillDetailsDTO billDetailsDTO) {
        return new ResponseEntity<>(this.iBillDetailsService.save(billDetailsDTO), HttpStatus.OK);
    }
}
