package com.example.procurement.Repository;

import com.example.procurement.Entity.QuotationEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuotationRepository extends MongoRepository<QuotationEntity, String> {
}
