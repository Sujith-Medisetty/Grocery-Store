package com.GroceryStore.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.GroceryStore.entity.User;
import com.GroceryStore.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService{

	@Autowired
	private UserRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		String arr[]=username.split(",");
		User user;
			user=repo.findByIdAndRole(arr[0],arr[1]);
		
		
		System.out.println(user);
		return  new org.springframework.security.core.userdetails.User(user.getUseremail()+','+user.getUserrole(),user.getUserpassword(),new ArrayList<>());
	}

}
