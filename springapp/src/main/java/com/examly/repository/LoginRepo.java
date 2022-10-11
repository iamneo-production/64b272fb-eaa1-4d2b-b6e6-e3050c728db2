package com.examly.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.entity.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>{
	Login findByUsernameAndPassword(String username, String password);

}
