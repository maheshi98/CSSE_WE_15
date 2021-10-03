package com.example.procurement.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Document(collection = "Order")
public class OrderEntity {

    @Id
    private String id;
    private String orderId;
    private Date deadLine;
    private Double totalCost;
    private String status;
    private Double estimatedCost;
    private String supplierName;
    private ProjectEntity projectId;
    @DBRef
    private List<MaterialsEntity> MaterialList;

    public OrderEntity(String id, String orderId, Date deadLine, Double totalCost, String status, Double estimatedCost, String supplierName) {
        this.id = id;
        this.orderId = orderId;
        this.deadLine = deadLine;
        this.totalCost = totalCost;
        this.status = status;
        this.estimatedCost = estimatedCost;
        this.supplierName = supplierName;
    }

    public List<MaterialsEntity> getMaterialList() {
        return MaterialList;
    }

    public void setMaterialList(List<MaterialsEntity> materialList) {
        MaterialList = materialList;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public Date getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(Date deadLine) {
        this.deadLine = deadLine;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getEstimatedCost() {
        return estimatedCost;
    }

    public void setEstimatedCost(Double estimatedCost) {
        this.estimatedCost = estimatedCost;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public ProjectEntity getProjectId() {
        return projectId;
    }

    public void setProjectId(ProjectEntity projectId) {
        this.projectId = projectId;
    }
}
