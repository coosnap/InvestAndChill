package com.starter.InvestAndChill.dropbox;

import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.v2.DbxClientV2;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DropboxConfig {


	 private String accessToken;
	 
	 public DropboxConfig(@Value("123") String accessToken) {
	        this.accessToken = accessToken;
	    }

	    public String getAccessToken() {
	        return accessToken;
	    }

    @Bean
    public DbxClientV2 dropboxClient() {
    	System.out.println("accesstoken: " + accessToken);
        DbxRequestConfig config = DbxRequestConfig.newBuilder("dropbox/spring-boot-app").build();
        return new DbxClientV2(config, accessToken);
    }
}

