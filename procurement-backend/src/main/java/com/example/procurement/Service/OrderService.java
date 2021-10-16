package com.example.procurement.Service;


import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<OrderEntity> getAllPets(){
        return orderRepository.findAll();
    }

    public String getOrderName(){
        return "Orde100";
    }
    public List<OrderEntity> getOrderByStatus(String status){
        return orderRepository.findByStatus(status);
    }

    public Optional<OrderEntity> getById(String id){
        return orderRepository.findById(id);
    }

}
