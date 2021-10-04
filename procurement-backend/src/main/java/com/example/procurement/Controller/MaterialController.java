package com.example.procurement.Controller;

import com.example.procurement.Entity.MaterialsEntity;
import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.MaterialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/")
public class MaterialController {

    @Autowired
    private MaterialsRepository materialsRepository;

    @PostMapping("/create")
    public ResponseEntity<MaterialsEntity> createPet(@RequestBody MaterialsEntity materialsEntity) {
        try{
            materialsRepository.save(materialsEntity);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/")
    public List<MaterialsEntity> getAllOrder(){
        return  materialsRepository.findAll();
    }

}