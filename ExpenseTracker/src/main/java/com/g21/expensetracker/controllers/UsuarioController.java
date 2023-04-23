package com.g21.expensetracker.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g21.expensetracker.Models.User;
import com.g21.expensetracker.repositories.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired UsuarioRepository userRepo;
	
	@GetMapping("/get")
	public List<User> list(){
		return userRepo.findAll();
	}

}
