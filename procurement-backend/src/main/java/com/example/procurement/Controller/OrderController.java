package com.example.procurement.Controller;

import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/create")
    public ResponseEntity<OrderEntity> createPet(@RequestBody OrderEntity pet) {
        try{
            orderRepository.save(pet);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/getall")
    public ResponseEntity<List<OrderEntity>> getAllPets(){
        try{
            List<OrderEntity> order = new ArrayList<OrderEntity>();
            orderRepository.findAll().forEach(order::add);
            if(order.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(order, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    @GetMapping(value = "/")
//    public List<OrderEntity> getAllOrder(){
//        return  orderRepository.findAll();
//    }

}
