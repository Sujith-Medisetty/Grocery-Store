package com.GroceryStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GroceryStore.entity.Product;


public interface ProductsDao extends JpaRepository<Product,Integer> {

}
