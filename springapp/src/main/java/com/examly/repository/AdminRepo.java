package com.examly.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.entity.Course;

public interface CourseRepo extends JpaRepository<Course, Integer>{

}
