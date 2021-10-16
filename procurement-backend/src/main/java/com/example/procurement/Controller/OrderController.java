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

    /**
     * @description Create new Order
     * @memberof OrderController
     */
    @PostMapping("/create")
    public ResponseEntity<OrderEntity> createOrder(@RequestBody OrderEntity order) {
        try{
            orderRepository.save(order);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @description This method retrieve all Orders
     * @memberof OrderController
     */
    @RequestMapping(value = "/getall", method = RequestMethod.GET)
    public List<OrderEntity> GetAllOrders(){
        return orderService.getAllOrders();
    }

    /**
     * @description This method retrieve Order details by OrderId
     */
    @GetMapping("getById/{id}")
    public Optional<OrderEntity> findOrderById(@PathVariable String id){
        return orderRepository.findById(id);
    }

    /**
     * @description This method Update the status of Order
     * @memberof OrderController
     */
    @PutMapping("update/{id}")
    public ResponseEntity<OrderEntity> updateOrder(@RequestBody OrderEntity order, @PathVariable String id){
        order.setId(id);
        orderRepository.save(order);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    /**
     * @description This method retrieve all Approved Orders
     * @memberof OrderController
     */
    @GetMapping("/approvedOrders")
    public ResponseEntity<List<OrderEntity>> getApprovedOrders() {
        try {
            return ResponseEntity.ok(orderService.getOrderByStatus("APPROVED"));
        } catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    @GetMapping(value = "/")
//    public List<OrderEntity> getAllOrder(){
//        return  orderRepository.findAll();
//    }

}
