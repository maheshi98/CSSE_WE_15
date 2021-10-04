package com.example.procurement.Controller;

import com.example.procurement.Entity.MaterialsEntity;
import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.MaterialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/")
public class MaterialController {

    @Autowired
    private MaterialsRepository materialsRepository;

    @PostMapping(value = "/" )
    public MaterialsEntity SaveNewOrder(@RequestBody MaterialsEntity order){
        return materialsRepository.save(order);
    }

    @GetMapping(value = "/")
    public List<MaterialsEntity> getAllOrder(){
        return  materialsRepository.findAll();
    }

}
