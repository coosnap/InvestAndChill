package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

@Entity(name = "Article")
public class Article {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(length = 500)
	private String title;
	@Column
	@Type(type = "text")
	private String content;
	@Column(length = 500)
	private String url;
	
	
	@ManyToOne
	@JoinColumn(name = "stock_id")
	private StockSymbol stockId;
	
	public String getUrl() {
		return url;
	}
	public StockSymbol getStockId() {
		return stockId;
	}
	public void setStockId(StockSymbol stockId) {
		this.stockId = stockId;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public Article() {
		
	}
	
	public Article(int id, String title, String content, String url) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.url = url;
	}
	
	
}
