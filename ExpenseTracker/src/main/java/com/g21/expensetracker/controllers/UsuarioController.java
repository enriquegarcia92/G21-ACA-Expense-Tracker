package com.g21.expensetracker.controllers;

import java.util.List;

import com.g21.expensetracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.g21.expensetracker.models.User;
import com.g21.expensetracker.repositories.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	UsuarioRepository userRepo;
	@Autowired
	UserService userService;

	@GetMapping("/get")
	public List<User> list() {
		return userService.getUsers();
	}

	@PutMapping("/edit/{id}")
	public ResponseEntity updateUser(@RequestBody User updatedUser, @PathVariable Integer id) {
		userService.editUser(updatedUser, id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	@GetMapping("/checkExist")
	public ResponseEntity recoverPassword(@RequestBody String email) {
		User recoveryUser = userService.searchByEmail(email);
		if(recoveryUser != null){
			userService.changePasswordOTP(email);
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}else{
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
	}

	@PutMapping("/recovery/{id}")
	public ResponseEntity resetPassword(@RequestBody String newPassword, @PathVariable Integer id){
		userService.changePassword(newPassword,id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity closeAccount(@PathVariable Integer id){
		userService.deleteUser(id);
		return ResponseEntity.status(HttpStatus.GONE).build();
	}
}
