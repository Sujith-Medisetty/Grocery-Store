package com.GroceryStore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int sno;
	
	private int id;
	private String title;
	private String brand;
	private String price;
	private String description;
	private String category;
	private String units;
	private String quantity;
	private String user;
	
	
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
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getUnits() {
		return units;
	}
	public void setUnits(String units) {
		this.units = units;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Cart [id=" + id + ", title=" + title + ", brand=" + brand + ", price=" + price + ", description="
				+ description + ", category=" + category + ", units=" + units + ", quantity=" + quantity + ", user="
				+ user + "]";
	}
	
}
