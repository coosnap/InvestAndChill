package com.starter.InvestAndChill.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;

public class ScriptUtils {
    public static File extractScript(String scriptPath) throws IOException {
        InputStream inputStream = ScriptUtils.class.getResourceAsStream(scriptPath);
        if (inputStream == null) {
            throw new IOException("Script not found: " + scriptPath);
        }

        File tempFile = Files.createTempFile("script", ".py").toFile();
        tempFile.deleteOnExit();

        try (FileOutputStream outputStream = new FileOutputStream(tempFile)) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
        }

        return tempFile;
    }
}
