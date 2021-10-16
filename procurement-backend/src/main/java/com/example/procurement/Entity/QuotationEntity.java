package com.example.procurement.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Quotation")
public class QuotationEntity {

    private String id;
    private String quotationId;
    private double estimatedAmount;
    private Date dateFrom;
    private Date dateTo;
    private Double unitCost;
    private int quantity;
    private String materials;
    private OrderEntity orderId;

    public QuotationEntity(String id, String quotationId, double estimatedAmount, Date dateFrom, Date dateTo, Double unitCost, int quantity) {
        this.id = id;
        this.quotationId = quotationId;
        this.estimatedAmount = estimatedAmount;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.unitCost = unitCost;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuotationId() {
        return quotationId;
    }

    public void setQuotationId(String quotationId) {
        this.quotationId = quotationId;
    }

    public double getEstimatedAmount() {
        return estimatedAmount;
    }

    public void setEstimatedAmount(double estimatedAmount) {
        this.estimatedAmount = estimatedAmount;
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }

    public Double getUnitCost() {
        return unitCost;
    }

    public void setUnitCost(Double unitCost) {
        this.unitCost = unitCost;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public OrderEntity getOrderId() {
        return orderId;
    }

    public void setOrderId(OrderEntity orderId) {
        this.orderId = orderId;
    }

    public String getMaterials() {
        return materials;
    }

    public void setMaterials(String materials) {
        this.materials = materials;
    }
}
