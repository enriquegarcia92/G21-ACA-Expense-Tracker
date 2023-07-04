package com.g21.expensetracker.controllers;

import java.util.List;
import java.util.Optional;

import com.g21.expensetracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.g21.expensetracker.models.User;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	UserService userService;

	@GetMapping("/get")
	public List<User> list() {
		return userService.getUsers();
	}
	@GetMapping("/get/{id}")
	public Optional<User> getProfile(@PathVariable Integer id){
		return userService.getUserDetails(id);
	}
	@PutMapping("/edit/{id}")
	public ResponseEntity updateUser(@RequestBody User updatedUser, @PathVariable Integer id) {
		userService.editUser(updatedUser, id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	@PutMapping("/updatebudget/{id}")
	public ResponseEntity edigBudget(@RequestBody User updatedUser, @PathVariable Integer id) {
		userService.editBudget(updatedUser, id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}



	@DeleteMapping("/delete/{id}")
	public ResponseEntity closeAccount(@PathVariable Integer id){
		userService.deleteUser(id);
		return ResponseEntity.status(HttpStatus.GONE).build();
	}

	@PutMapping("/recoveryOTP/{id}")
	public ResponseEntity resetPassword(@RequestBody String newPassword, @PathVariable Integer id){
		userService.changePassword(newPassword,id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
}
