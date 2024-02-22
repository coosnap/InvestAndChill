package com.starter.InvestAndChill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
//@ComponentScan(basePackageClasses = TestController.class)
public class InvestAndChillApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestAndChillApplication.class, args);
	}

}
