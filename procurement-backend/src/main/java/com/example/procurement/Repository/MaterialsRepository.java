package com.example.procurement.Repository;

import com.example.procurement.Entity.MaterialsEntity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialsRepository extends MongoRepository<MaterialsEntity, String> {
}
