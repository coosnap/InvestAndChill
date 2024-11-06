package com.starter.InvestAndChill.jwt.controllers;

import com.starter.InvestAndChill.utils.ScriptUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.util.Objects;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@RestController
@RequestMapping("/api/upload")
public class DataUploadController {
  private static final Logger LOGGER = LoggerFactory.getLogger(DataUploadController.class);
  private final Lock lock = new ReentrantLock();

  @PostMapping
  public String uploadFile(@RequestParam("file") MultipartFile file) {
    if (lock.tryLock()) {
      File uploadedFile = null;
      try {
        // Save the file to the server
        String[] names = Objects.requireNonNull(file.getOriginalFilename()).split("\\.");
        uploadedFile = Files.createTempFile(names[0], names[1]).toFile();
        file.transferTo(uploadedFile);

        // Call the Python script
        String result = callPythonScript(uploadedFile.getAbsolutePath());

        return "File processed successfully: " + result;
      } catch (Exception e) {
        return "File upload failed: " + e.getMessage();
      } finally {
        if (uploadedFile != null) {

          if (uploadedFile.exists()) {
            boolean deleted = uploadedFile.delete();
            LOGGER.info("Temporary file deleted with status: {}", deleted);
          } else {
            LOGGER.warn("Temporary file does not exist: {}", uploadedFile.getAbsolutePath());
          }
        }

        lock.unlock();
      }
    } else {
      return "Another upload is in progress. Please try again later.";
    }
  }

  private String callPythonScript(String filePath) {
    try {
      File scriptFile = ScriptUtils.extractScript("/scripts/transform_data_script.py");

      ProcessBuilder pb = new ProcessBuilder("python", scriptFile.getAbsolutePath() , filePath);
      pb.redirectErrorStream(true);
      Process process = pb.start();
      StringBuilder output = new StringBuilder();
      try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
        String line;
        while ((line = reader.readLine()) != null) {
          output.append(line).append("\n");
        }
      }
      return output.toString();
    } catch (IOException e) {
      throw new RuntimeException("Failed to call Python script: " + e.getMessage());
    }
  }
}
