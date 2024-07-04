package com.starter.InvestAndChill.jwt.payload.response;

public class ResponseFileStatic {
	private String name;
	private String path;
	private String message;
	
	public ResponseFileStatic() {
	}
	public ResponseFileStatic(String name, String path, String message) {
		this.name = name;
		this.path = path;
		this.message = message;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
