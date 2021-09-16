package com.GroceryStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.GroceryStore.entity.Cart;
import com.GroceryStore.entity.Product;
import com.GroceryStore.entity.User;
import com.GroceryStore.repository.CartDao;
import com.GroceryStore.repository.ProductsDao;
import com.GroceryStore.util.JwtUtil;

@RestController
public class Products {
	

	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private ProductsDao dao;
	
	@Autowired
	private CartDao cartdao;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	public String getUser(){
		String name="";
		Object principal = SecurityContextHolder. getContext(). getAuthentication(). getPrincipal();
		if (principal instanceof UserDetails) {
			name = ((UserDetails)principal). getUsername();
			} else {
			name = principal. toString();
			}
		return name;
	}
	
	
	
	@RequestMapping("/")
	public String home() {
		
		return "Welcome "+getUser();
	}

	@PostMapping("/authenticate")
	public String generateToken(@RequestBody User authRequest) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUseremail()+','+authRequest.getUserrole(), authRequest.getUserpassword()));
		} catch (Exception e) {
			throw new Exception("Invalid UserId/Password");
		}
		
		return jwtUtil.generateToken(authRequest.getUseremail()+','+authRequest.getUserrole());
	}
	

	@PostMapping("/saveproduct")
	public void saveProduct(@RequestBody Product product) {
		System.out.println(product);
		dao.save(product);
	}
	
	@GetMapping("/getproducts")
	public @ResponseBody List<Product> viewProducts() {
		
		return dao.findAll();
	}
	
	@PostMapping("/editproduct")
	public void editProduct(@RequestBody Product product) {
		dao.save(product);
	}
	
	@PostMapping("/deleteProduct")
	public void deleteProduct(@RequestBody Product product) {
		dao.delete(product);
	}
	
//	--------------------------------CART CURD OPERATIONS-------------------------------
	
	@GetMapping("/getcartproducts")
	public @ResponseBody List<Cart> viewCartProducts(){
		return cartdao.findAll();
	}
	
	@PostMapping("/addcartproduct")
	public void addCartProducts(@RequestBody Cart cartproduct) {
		cartdao.save(cartproduct);
	}
	
	@PostMapping("updatecartproduct")
	public void updateCartProduct(@RequestBody Cart cartproduct) {
		cartdao.save(cartproduct);
	}
	
	
	@PostMapping("deletecartproduct")
	public void deleteCartProduct(@RequestBody Cart cartproduct) {
		cartdao.delete(cartproduct);
	}
	
//	------------------------------------------------------------------------------------------
}
