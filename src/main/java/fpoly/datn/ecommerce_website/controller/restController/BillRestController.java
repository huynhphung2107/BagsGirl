package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BillDTO;
import fpoly.datn.ecommerce_website.service.IBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/manage")
public class BillRestController {
    @Autowired
    private IBillService iBillService;

    @RequestMapping(value = "/bill", method = RequestMethod.GET)
    public ResponseEntity<List<BillDTO>> findAll (){

        return new ResponseEntity<>(this.iBillService.findAllBill(), HttpStatus.OK );
    }
}
