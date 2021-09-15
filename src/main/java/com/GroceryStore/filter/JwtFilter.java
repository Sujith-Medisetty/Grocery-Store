package com.GroceryStore.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.GroceryStore.service.MyUserDetailsService;
import com.GroceryStore.util.JwtUtil;



@Component
public class JwtFilter extends OncePerRequestFilter {

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private MyUserDetailsService service;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {


        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization");
        response.addHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Credentials, authorization");
        response.addHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE, PATCH");

        System.out.println("entered...");
		
		String authorizationHeader = request.getHeader("Authorization");

		String token = null;
		String userName = null;

		if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			token = authorizationHeader.substring(7);
			userName = jwtUtil.extractUsername(token);
		}
		
		System.out.println("stage 1... "+userName);
		
		if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			
			System.out.println("stage 2....");
			UserDetails userDetails = service.loadUserByUsername(userName);

			System.out.println("stage 3....");
			
			if (jwtUtil.validateToken(token, userDetails)) {

				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}

		}

		filterChain.doFilter(request, response);

	}

}
