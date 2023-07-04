package com.g21.expensetracker.auth;

import java.net.URI;

import javax.validation.Valid;

import com.g21.expensetracker.services.AuthService;
import com.g21.expensetracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.g21.expensetracker.models.Role;
import com.g21.expensetracker.models.User;
import com.g21.expensetracker.jwt.JwtTokenUtil;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthApi {
	@Autowired AuthService authService;
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request){
		try{
			return ResponseEntity.ok(authService.login(request));
		} catch (BadCredentialsException ex) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity createUser(@RequestBody @Valid User newUser) {
		User repeatedUser = authService.searchByEmail(newUser.getEmail());
		if(repeatedUser != null){
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}else{
			authService.register(newUser);
			return ResponseEntity.status(HttpStatus.CREATED).build();
		}
		}

	@GetMapping("/recoverpassword")
	public ResponseEntity recoverPassword(@RequestBody String email) {
		User recoveryUser = authService.searchByEmail(email);
		if(recoveryUser != null){
			System.out.println("userfound");
			authService.changePasswordOTP(email);
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}else{
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
	}


}
