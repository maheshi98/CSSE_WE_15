package com.example.procurement.Repository;

import com.example.procurement.Entity.InvoiceEntity;
import com.example.procurement.Entity.OrderEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvoiceRepository extends MongoRepository<InvoiceEntity, String> {

    List<InvoiceEntity> findByOrderId(String orderId);

}
