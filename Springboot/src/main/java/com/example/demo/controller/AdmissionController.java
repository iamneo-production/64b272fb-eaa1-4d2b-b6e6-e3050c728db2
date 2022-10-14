package com.example.demo.controller;

import com.example.demo.entity.Admission;
import com.example.demo.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class AdmissionController {
	
	@Autowired
	private AdmissionService service;
	
	@PostMapping("/addAdmission")
	@CrossOrigin(origins = "http://localhost:3000")
	public Admission addAdmission(@RequestBody Admission Admission) {
		return service.saveAdmission(Admission);
	}
	
	@GetMapping("/getAdmissions")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Admission> getAdmissions(){
		return service.getAdmissions();
	}
	
	@DeleteMapping("/delAdmission/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public String delAdmission(@PathVariable int id){
		return service.deleteAdmission(id);
	}	

	
}
