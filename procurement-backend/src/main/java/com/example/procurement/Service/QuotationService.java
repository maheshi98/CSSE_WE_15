package com.example.procurement.Service;

import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Entity.QuotationEntity;
import com.example.procurement.Repository.QuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuotationService {

    @Autowired
    private QuotationRepository quotationRepository;

    public List<QuotationEntity> getAllQuotation(){
        return quotationRepository.findAll();
    }
}
