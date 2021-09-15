package com.GroceryStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GroceryStore.entity.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {

}
