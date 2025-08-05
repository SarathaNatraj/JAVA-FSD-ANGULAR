package com.example.ecommerce_app_rest_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce_app_rest_api.model.Customer;
import com.example.ecommerce_app_rest_api.model.Order;
import com.example.ecommerce_app_rest_api.service.CustomerService;
import com.example.ecommerce_app_rest_api.service.OrderService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AppController {
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	OrderService orderService;
	
	@GetMapping("/customers")
	public List<Customer> getAllCustomer(){
		return customerService.getAllCustomers();
	}

	@PostMapping("/customers")
	public Customer createCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}
	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable Long id){
		Customer customer = customerService.getCustomerById(id);
		return  new ResponseEntity<Customer>(customer,HttpStatus.OK) ;
	}
	
	@PutMapping("/customers/{id}")
	public Customer updateCustomer(@RequestBody Customer customer, @PathVariable Long id) {
		Customer existingCustomer = customerService.getCustomerById(id);
    	existingCustomer.setName(customer.getName());
    	existingCustomer.setPassword(customer.getPassword());
    	existingCustomer.setEmail(customer.getEmail());
    	
    	Customer result = customerService.saveCustomer(existingCustomer);
    	
    	return result;
		
		
		
	}
	@DeleteMapping("/customers/{id}")
	public String deleteCustomer(@PathVariable Long id) {
		customerService.deleteCustomer(id);
		return "Customer deleted with this "+id;
	}
	
	
	@GetMapping("/customers/byName/{name}")
	public Customer getCustomerByName(@PathVariable String name) {
		return customerService.getCustomerByName(name);
	}
	@GetMapping("/customers/byNameAndEmail/{name}")
	public Customer getCustomerByName(@PathVariable String name, @RequestParam String email) {
		return customerService.getCustomerByNameAndEmail(name,email);
	}
	
	@GetMapping("/customers/byNameStarts/{prefix}")
	public List<Customer> getCustomerByNameStartsWith(@PathVariable String prefix) {
		return customerService.getCustomerByNameStartsWith(prefix);
	}
	
	@GetMapping("/customers/byCountNameStarts/{prefix}")
	public long countCustomerByNameStartsWith(@PathVariable String prefix) {
		return customerService.countCustomerByNameStartsWith(prefix);
	}
	
	@GetMapping("/customers/byDomain/{domain}")
	public List<Customer> getCustomersByDomain(@PathVariable String domain) {
		return customerService.getCustomersByDomain(domain);
	}
	
	@GetMapping("/customers/minAgeCustomer")
	public Customer getMinAgeCustomer() {
		return customerService.getMinAgeCustomer();
	}
	
	@PostMapping("/orders")
    public ResponseEntity<Order> createOrder(@RequestParam Long customerId) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.createOrder(customerId));
    }
}
