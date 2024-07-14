package com.starter.InvestAndChill.jwt.controllers;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.starter.InvestAndChill.jwt.models.FileInfo;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.ResponseFile;
import com.starter.InvestAndChill.jwt.payload.response.ResponseFileStatic;
import com.starter.InvestAndChill.jwt.security.services.FilesStorageServiceStatic;


@Controller
@CrossOrigin("*")
@RequestMapping("/api/fileStatic")
public class FilesStaticController {
	@Autowired
	  FilesStorageServiceStatic storageService;

	  @PostMapping("/upload")
	  public ResponseEntity<ResponseFileStatic> uploadFile(@RequestParam("file") MultipartFile file) {
	    String message = "";
	    try {
	      storageService.save(file);
	      message = "Uploaded the file successfully: " + file.getOriginalFilename();
	      String fileDownloadUri = ServletUriComponentsBuilder
		          .fromCurrentContextPath()
		          .path("/api/fileStatic/files/")
		          .path(file.getOriginalFilename())
		          .toUriString();
	      ResponseFileStatic rs = new ResponseFileStatic(file.getOriginalFilename(), fileDownloadUri, message);
	      return ResponseEntity.status(HttpStatus.OK).body(rs);
	    } catch (Exception e) {
	    	ResponseFileStatic rs = new ResponseFileStatic();
	    	message = "Could not upload the file: " + file.getOriginalFilename() + ". Error: " + e.getMessage();
	    	rs.setName("");
	    	rs.setPath("");
	    	rs.setMessage(message);
	      
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(rs);
	    }
	  }

	  @GetMapping("/files")
	  public ResponseEntity<List<FileInfo>> getListFiles() {
	    List<FileInfo> fileInfos = storageService.loadAll().map(path -> {
	      String filename = path.getFileName().toString();
	      String url = MvcUriComponentsBuilder
	          .fromMethodName(FilesStaticController.class, "getFile", path.getFileName().toString()).build().toString();

	      return new FileInfo(filename, url);
	    }).collect(Collectors.toList());

	    return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
	  }

	  @GetMapping("/files/{filename:.+}")
	  @ResponseBody
	  public ResponseEntity<Resource> getFile(@PathVariable String filename) {
	    Resource file = storageService.load(filename);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
	  }
}
