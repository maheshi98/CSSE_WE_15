package com.example.procurement.Controller;

import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping(value = "/" )
    public OrderEntity SaveNewOrder(@RequestBody OrderEntity order){
        return orderRepository.save(order);
    }

    @GetMapping(value = "/")
    public List<OrderEntity> getAllOrder(){
        return  orderRepository.findAll();
    }

}
