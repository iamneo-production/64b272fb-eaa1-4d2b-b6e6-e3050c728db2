package com.examly.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.entity.Login;
import com.examly.entity.Signup;
import com.examly.repository.SignupRepository;

@Service
public class SignupService {
	
	@Autowired 
	private SignupRepository signuprepo;
	
	@Autowired
	Login login;
	
	@Autowired
	private LoginService loginservice;
	
	public Signup saveSignup(Signup signup){		
		Signup s = signuprepo.save(signup);
		login.setId(s.getId());
		login.setUsername(s.getEmail());
		login.setPassword(s.getPassword());
		login.setRole(s.getUser());		
		loginservice.saveLogin(login);		
		return s;
	}	
	
}
