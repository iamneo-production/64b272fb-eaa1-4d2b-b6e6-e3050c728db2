package com.example.demo.repository;

import com.example.demo.entity.Admission;
import com.example.demo.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdmissionRepo extends JpaRepository<Admission, Integer>{

}
