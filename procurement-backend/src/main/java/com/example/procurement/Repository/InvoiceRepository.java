package com.example.procurement.Repository;

import com.example.procurement.Entity.InvoiceEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends MongoRepository<InvoiceEntity, String> {
}
