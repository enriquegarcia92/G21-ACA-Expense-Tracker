package com.g21.expensetracker.services;

import com.g21.expensetracker.auth.AuthRequest;
import com.g21.expensetracker.auth.AuthResponse;
import com.g21.expensetracker.jwt.JwtTokenUtil;
import com.g21.expensetracker.models.Role;
import com.g21.expensetracker.models.User;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired UsuarioRepository userRepo;
    @Autowired AuthenticationManager authManager;
    @Autowired JwtTokenUtil jwtUtil;
    public User register(User newUser){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        Double salary = 0.0, limit = 0.0;
        String rawPasword= newUser.getPassword();
        String encodedPassword=passwordEncoder.encode(rawPasword);
        User auxuser = new User(newUser.getNombrecompleto(),newUser.getEmail(),encodedPassword,salary,limit, Role.USER,Boolean.FALSE);
        User user = userRepo.save(auxuser);
        return user;
    }
    public AuthResponse login(AuthRequest request){
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword())
        );
        User user = (User) authentication.getPrincipal();
        String accesToken=jwtUtil.generateAccesToken(user);
        AuthResponse response = new AuthResponse(user.getUsername(), accesToken,user.getId());
        return response;
    }
<<<<<<< Updated upstream
=======

    public User searchByEmail(String email) {
        User usuario = userRepo.UserfindExistence(email);
        return usuario;
    }

    public Optional<User> changePasswordOTP(String email) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return userRepo.findByEmail(email)
                .map(user -> {
                    Otp otp = new Otp();
                    String auxotp = otp.generateOTP(8);
                    emailService.sendEmail(user.getEmail(), "Saludos "+user.getNombrecompleto()+" este correo es para informarle que se ha cambiado su contraseña, favor usar contraseña provisional: " + auxotp, "Cambio de contraseña Expense Tracker");
                    String encodedPassword=passwordEncoder.encode(auxotp);
                    user.setPassword(encodedPassword);
                    user.setPasswordState(Boolean.TRUE);
                    return userRepo.save(user);
                });
    }
>>>>>>> Stashed changes
}
