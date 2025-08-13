package com.example.order_service.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaConfig {
	
	@Bean
	public NewTopic newTopic() {
		NewTopic ordersTopic =  TopicBuilder.name("orders-batch3").build();
		
		return ordersTopic;
		
	}
	

}
