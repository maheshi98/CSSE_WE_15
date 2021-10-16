package com.example.procurement.Service;


import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<OrderEntity> getAllOrders(){
        return orderRepository.findAll();
    }

    public List<OrderEntity> getOrderByStatus(String status){
        return orderRepository.findByStatus(status);
    }

}
