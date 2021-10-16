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

    /**
     * @description Create new Material
     * @memberof MaterialController
     * @param materialsEntity
     */
    @PostMapping("/create")
    public ResponseEntity<MaterialsEntity> createMaterials(@RequestBody MaterialsEntity materialsEntity) {
        try{
            materialsRepository.save(materialsEntity);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /**
     * @description get Material
     * @memberof MaterialController
     * @return List<MaterialsEntity>
     */
    @GetMapping(value = "/")
    public List<MaterialsEntity> getAllMaterials(){
        return  materialsRepository.findAll();
    }

}
