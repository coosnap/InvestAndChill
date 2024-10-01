package com.starter.InvestAndChill.dropbox;

import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.v2.DbxClientV2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DropboxConfig {

    private static final String ACCESS_TOKEN = "sl.B991sshCVejWOu246OdICITZHpjw3HPD1lsrtV3tM7ONS2vw7afof3lZeZ7rgzHWo7XTapM3UPN0f5ibNrrnSSA1r3MQ4PnfU0JtaEqbQ10xJlgZrsaXXFUm3qBDr1PVrRheaLbYQR5sG-0";

    @Bean
    public DbxClientV2 dropboxClient() {
        DbxRequestConfig config = DbxRequestConfig.newBuilder("dropbox/spring-boot-app").build();
        return new DbxClientV2(config, ACCESS_TOKEN);
    }
}

