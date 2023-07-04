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
import java.util.Random;

@Service
public class UserService {
    @Autowired UsuarioRepository userRepo;
    public List<User> getUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserDetails(Integer id) {
        return userRepo.findById(id);
    }

    public User editUser(User newUser, Integer id){
        String rawPasword= newUser.getPassword();
        if(rawPasword==""){
            return editNoPass(newUser,id);
        }else{
            return editPass(newUser,id,rawPasword);
        }
    }

    public User editBudget(User newUser,Integer id){
        return userRepo.findById(id)
                .map(user->{
            user.setBudgetlimit(newUser.getBudgetlimit());
            user.setBudgetcoment(newUser.getBudgetcoment());
            return userRepo.save(user);
        }).orElseGet(()->{
            return userRepo.save(newUser);
        });
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
    public void deleteUser(Integer id){
        User deluser = userRepo.getById(id);
        userRepo.delete(deluser);
    }

    public Optional<User> changePassword(String newPassword, Integer id) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword=passwordEncoder.encode(newPassword);
        return userRepo.findById(id)
                .map(user -> {
                    user.setPassword(encodedPassword);
                    user.setPasswordState(Boolean.FALSE);
                    return userRepo.save(user);
                });
    }


}
