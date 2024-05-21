package com.starter.InvestAndChill;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import javax.annotation.Resource;
import com.starter.InvestAndChill.jwt.security.services.FilesStorageServiceStatic;


@SpringBootApplication
//@ComponentScan(basePackageClasses = TestController.class)
public class InvestAndChillApplication implements CommandLineRunner{

	@Resource
	FilesStorageServiceStatic storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(InvestAndChillApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		storageService.init();
	}

}
