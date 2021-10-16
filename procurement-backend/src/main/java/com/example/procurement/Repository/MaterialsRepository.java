package com.example.procurement.Repository;

import com.example.procurement.Controller.InvoiceController;
import com.example.procurement.Entity.MaterialsEntity;
import com.example.procurement.Entity.OrderEntity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialsRepository extends MongoRepository<MaterialsEntity, String> {


}
