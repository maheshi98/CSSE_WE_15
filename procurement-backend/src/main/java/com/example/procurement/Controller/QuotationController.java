package com.example.procurement.Controller;

import com.example.procurement.Entity.QuotationEntity;
import com.example.procurement.Repository.QuotationRepository;
import com.example.procurement.Service.QuotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/quotation")
public class QuotationController {

    @Autowired
    private QuotationRepository quotationRepository;

    @Autowired
    private QuotationService quotationService;

    @PostMapping("/create")
    public ResponseEntity<QuotationEntity> createQuotation(@RequestBody QuotationEntity quotation) {
        try{
            quotationRepository.save(quotation);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
