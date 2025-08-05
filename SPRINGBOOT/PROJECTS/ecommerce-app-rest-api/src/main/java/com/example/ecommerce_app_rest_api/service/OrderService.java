package com.example.ecommerce_app_rest_api.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ecommerce_app_rest_api.model.*;
import com.example.ecommerce_app_rest_api.repository.OrderRepository;

@Service
public class OrderService {
	@Autowired
    private CustomerService customerService;
	@Autowired
	private OrderRepository orderRepository;

	 public Order createOrder(Long customerId) {
	        Customer customer = customerService.getCustomerById(customerId);
	        if (customer == null) {
	            throw new RuntimeException("Customer not found");
	        }
	        
	     
	        
	        Order order = new Order();
	        order.setOrderDate(LocalDateTime.now());
	        order.setCustomer(customer);
	        
	        
	        return orderRepository.save(order);
	    }
	}

