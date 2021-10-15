package com.example.procurement.Controller;

import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.OrderRepository;
import com.example.procurement.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<OrderEntity> createOrder(@RequestBody OrderEntity pet) {
        try{
            orderRepository.save(pet);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @RequestMapping(value = "/getall", method = RequestMethod.GET)
    public List<OrderEntity> GetAllOrders(){
        return orderService.getAllPets();
    }

    @GetMapping("getById/{id}")
    public Optional<OrderEntity> findPetById(@PathVariable String id){
        return orderRepository.findById(id);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<OrderEntity> updatePet(@RequestBody OrderEntity order, @PathVariable String id){
        order.setId(id);
        orderRepository.save(order);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/approvedOrders")
    public ResponseEntity<List<OrderEntity>> getApprovedOrders() {
        try {
            return ResponseEntity.ok(orderService.getConferenceByStatus("APPROVED"));
        } catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    @GetMapping(value = "/")
//    public List<OrderEntity> getAllOrder(){
//        return  orderRepository.findAll();
//    }

}
