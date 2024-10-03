package com.starter.InvestAndChill.jwt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dropbox.core.DbxException;
import com.dropbox.core.v2.files.UploadErrorException;
import com.starter.InvestAndChill.jwt.security.services.DropboxService;
import java.io.IOException;
@RestController
@RequestMapping("/api/dropbox")
public class DropboxController {
	@Autowired
    private DropboxService dropboxService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException, UploadErrorException, DbxException {
        String directLink = dropboxService.uploadFile(file);
        return ResponseEntity.ok(directLink);
    }
    
    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadFile(@RequestParam("path") String path) throws IOException, DbxException {
        byte[] file = dropboxService.downloadFile(path);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", path);

        return new ResponseEntity<>(file, headers, HttpStatus.OK);
    }
}
