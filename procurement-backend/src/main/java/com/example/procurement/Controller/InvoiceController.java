package com.example.procurement.Controller;

import com.example.procurement.Entity.InvoiceEntity;
import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/invoice")
public class InvoiceController {

    @Autowired
    private InvoiceRepository invoiceRepository;

    /**
     * @description This method retrieve all Orders
     * @memberof
     * @return InvoiceEntity
     */
    @RequestMapping(value = "/getall/{orderId}", method = RequestMethod.GET)
    public List<InvoiceEntity> getInvoiceByOrder(@PathVariable  String orderId){
        return invoiceRepository.findByOrderId(orderId);
    }

    /**
     * @description Create new Invoice
     * @memberof InvoiceController
     * @param invoice
     * @return InvoiceEntity
     */
    @PostMapping("/create")
    public ResponseEntity<InvoiceEntity> craeteInvoice(@RequestBody InvoiceEntity invoice) {
        try{
            invoiceRepository.save(invoice);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
