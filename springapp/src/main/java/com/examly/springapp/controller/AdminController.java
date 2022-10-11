package com.examly.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.entity.Course;
import com.examly.service.CourseService;


@RestController
public class CourseController {
	
	@Autowired
	private CourseService service;
	
	@PostMapping("/addCourse")
	@CrossOrigin(origins = "http://localhost:3000")
	public Course addCourse(@RequestBody Course course) {			
		return service.saveCourse(course);
	}
	
	@GetMapping("/getCourses")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Course> getCourses(){
		return service.getCourses();
	}
	
	@DeleteMapping("/delCourse/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public String delCourse(@PathVariable int id){
		return service.deleteCourse(id);		
	}	

	
}
