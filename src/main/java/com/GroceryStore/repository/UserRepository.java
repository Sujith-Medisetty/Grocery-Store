package com.GroceryStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.GroceryStore.entity.User;

public interface UserRepository extends JpaRepository<User, String>{
	
	@Query(value="select * from User u where u.useremail=?1",nativeQuery = true)
	User findByEmail(String email);
	
	@Query(value="select * from User u where u.useremail=?1 and u.userrole=?2",nativeQuery = true)
	User findByIdAndRole(String email,String role);
}
