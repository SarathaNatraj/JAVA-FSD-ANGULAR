package com.example.order_service.dto;

public class CustomerDTO {
private Long id;
    
    private String name;
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	private String email;
    private String password;
    private int age;
    
    public CustomerDTO() {
    	super();
    }
	public CustomerDTO(Long customerId, String string, String string2) {
		// TODO Auto-generated constructor stub
		this.id=customerId;
		this.name=string;
		this.email=string2;
	}

}
