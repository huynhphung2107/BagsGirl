package com.teamcode.demo.API;

import com.teamcode.demo.entity.Balo;
import com.teamcode.demo.repository.BaloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BaloApi {

    @Autowired
    private BaloRepository baloRepository;

    List<Balo> list = new ArrayList<>();

    //hienthi
    @RequestMapping(value = "/balo", method = RequestMethod.GET)
    public List<Balo> getAll() {
        list = baloRepository.findAll();
        return list;
    }

    //hien thi get one
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.GET)
    public Balo getOne(@PathVariable("id") String id) {
        Balo balo = baloRepository.findById(id).get();
        return balo;
    }

    //add
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.POST)
    public Balo hienthi(@RequestBody Balo balo) {
        baloRepository.save(balo);
        return balo;
    }

    //update
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody Balo balo) {
        baloRepository.save(balo);
    }

    //delete
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable("id") String id) {
        baloRepository.deleteById(id);
    }




}
