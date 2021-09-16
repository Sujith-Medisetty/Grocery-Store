package com.GroceryStore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class GroceryStoreApplication {

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedHeaders("*")
				.allowedOrigins("http://localhost:4200/").allowCredentials(true)
				.allowedMethods("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS")
				.exposedHeaders( "Authorization" ).maxAge(3600);
			}
		};
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(GroceryStoreApplication.class, args);
	}

}
