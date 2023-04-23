package com.g21.expensetracker.auth;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g21.expensetracker.Models.Role;
import com.g21.expensetracker.Models.User;
import com.g21.expensetracker.jwt.JwtTokenUtil;
import com.g21.expensetracker.repositories.UsuarioRepository;


@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthApi {
	@Autowired AuthenticationManager authManager;
	@Autowired JwtTokenUtil jwtUtil;
	@Autowired UsuarioRepository userRepo;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request){
		try {
			Authentication authentication = authManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword())
					);
			User user = (User) authentication.getPrincipal();
			String accesToken=jwtUtil.generateAccesToken(user);
			AuthResponse response = new AuthResponse(user.getUsername(), accesToken,user.getId());
			return ResponseEntity.ok(response);
		} catch (BadCredentialsException ex) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> createUser(@RequestBody @Valid User newUser) {
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String rawPasword= newUser.getPassword();
		String encodedPassword=passwordEncoder.encode(rawPasword);
		User auxuser = new User(newUser.getNombrecompleto(),newUser.getEmail(),encodedPassword,Role.USER);
	    User user = userRepo.save(auxuser);
	    URI userURI= URI.create("/usuario/"+user.getId());
	    return ResponseEntity.created(userURI).body(user);
		}
}
