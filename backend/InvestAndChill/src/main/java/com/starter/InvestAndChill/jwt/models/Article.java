package com.starter.InvestAndChill.jwt.models;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonFormat;

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
	
	public Timestamp getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	@Column(name = "created_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss",timezone="Asia/Saigon")
	private Timestamp createDate;
	
	@ManyToOne
	@JoinColumn(name = "stock_id")
	private StockSymbol stockId;
	
	@Column
	private int views;
	
	public int getViews() {
		return views;
	}
	public void setViews(int views) {
		this.views = views;
	}
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
	
	public Article(int id, String title, String content, String url, int views) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.url = url;
		this.views = views;
	}
	
	
}
