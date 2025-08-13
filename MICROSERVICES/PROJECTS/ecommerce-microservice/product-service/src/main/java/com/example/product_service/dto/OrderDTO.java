package com.example.product_service.dto;

import java.time.LocalDateTime;

public class OrderDTO {
	 private Long id;
	    
	    private Integer quantity;
	    
	    public Integer getQuantity() {
			return quantity;
		}

		public void setQuantity(Integer quantity) {
			this.quantity = quantity;
		}

		private LocalDateTime orderDate;
	    
	    private Long customerId; //reference customer-service, customer entity
	    
	    private Long productId; // reference product-service , product entity

	    // Getters and Setters
	    
	    
		public Long getProductId() {
			return productId;
		}

		public void setProductId(Long productId) {
			this.productId = productId;
		}

		public Long getCustomerId() {
			return customerId;
		}

		public void setCustomerId(Long customerId) {
			this.customerId = customerId;
		}

		public OrderDTO() {
	    	super();
	    }

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}


		public LocalDateTime getOrderDate() {
			return orderDate;
		}

		public void setOrderDate(LocalDateTime orderDate) {
			this.orderDate = orderDate;
		}

		@Override
		public String toString() {
			return "OrderDTO [id=" + id + ", quantity=" + quantity + ", orderDate=" + orderDate + ", customerId="
					+ customerId + ", productId=" + productId + "]";
		}

		
}
