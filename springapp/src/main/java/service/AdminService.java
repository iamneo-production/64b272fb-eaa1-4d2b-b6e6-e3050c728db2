package com.examly.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.entity.Course;
import com.examly.repository.CourseRepo;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepo courserepo;
	
	public Course saveCourse(Course course) {	
		return courserepo.save(course);
	}
	
	public List<Course> getCourses(){
		return courserepo.findAll();
	}	
	
	public String deleteCourse(int id) {
		courserepo.deleteById(id);
		return "yes";
	}
	

}
