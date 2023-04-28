package com.g21.expensetracker.services;

import com.g21.expensetracker.models.Role;
import com.g21.expensetracker.models.User;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired UsuarioRepository userRepo;
    public User register(User newUser){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        Double salary = 0.0, limit = 0.0;
        String rawPasword= newUser.getPassword();
        String encodedPassword=passwordEncoder.encode(rawPasword);
        User auxuser = new User(newUser.getNombrecompleto(),newUser.getEmail(),encodedPassword,salary,limit, Role.USER);
        User user = userRepo.save(auxuser);
        return user;
    }

    public List<User> getUsers(){
        return userRepo.findAll();
    }


    public User editUser(User newUser, Integer id){
        String rawPasword= newUser.getPassword();
        if(rawPasword==""){
            return editNoPass(newUser,id);
        }else{
            return editPass(newUser,id,rawPasword);
        }
    }

    private User editNoPass(User newUser, Integer id){
        return userRepo.findById(id)
                .map(user -> {
                    user.setNombrecompleto(newUser.getNombrecompleto());
                    user.setEmail(newUser.getEmail());
                    user.setSalary(newUser.getSalary());
                    user.setBudgetlimit(newUser.getBudgetlimit());
                    return userRepo.save(user);
                }).orElseGet(() -> {
                    return userRepo.save(newUser);
                });
    }
    private User editPass(User newUser, Integer id, String password){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword=passwordEncoder.encode(password);
        return userRepo.findById(id)
                .map(user -> {
                    user.setNombrecompleto(newUser.getNombrecompleto());
                    user.setEmail(newUser.getEmail());
                    user.setSalary(newUser.getSalary());
                    user.setBudgetlimit(newUser.getBudgetlimit());
                    user.setPassword(encodedPassword);
                    return userRepo.save(user);
                }).orElseGet(() -> {
                    return userRepo.save(newUser);
                });

    }


    public List<User> searchByEmail(String email) {
        List<User> usuario = userRepo.findExistence(email);
        return usuario;
    }

    public Optional<User> changePassword(String newPassword, Integer id) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword=passwordEncoder.encode(newPassword);
        return userRepo.findById(id)
                .map(user -> {
                    user.setPassword(encodedPassword);
                    return userRepo.save(user);
                });
    }
}
