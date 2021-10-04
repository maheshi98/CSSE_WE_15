package com.example.procurement.Service;

import com.example.procurement.Repository.QuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuotationService {

    @Autowired
    private QuotationRepository quotationRepository;
}
