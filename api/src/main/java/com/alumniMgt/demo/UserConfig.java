package com.alumniMgt.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class UserConfig {
	@Bean
	public WebMvcConfigurer corsConfigrer()
	{
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("GET","PUT","POST","DELETE").allowedHeaders("*").allowedOrigins("http://localhost:3000");
			}
		};
	}
}
