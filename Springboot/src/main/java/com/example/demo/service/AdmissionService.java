package com.example.demo.service;

import com.example.demo.entity.Admission;
import com.example.demo.repository.AdmissionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmissionService {
	
	@Autowired
	private AdmissionRepo Admissionrepo;
	
	public Admission saveAdmission(Admission Admission) {
		return Admissionrepo.save(Admission);
	}
	
	public List<Admission> getAdmissions(){
		return Admissionrepo.findAll();
	}	
	
	public String deleteAdmission(int id) {
		Admissionrepo.deleteById(id);
		return "yes";
	}
	

}
