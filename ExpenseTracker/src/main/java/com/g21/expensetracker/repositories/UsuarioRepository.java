package com.g21.expensetracker.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.g21.expensetracker.Models.User;


public interface UsuarioRepository extends JpaRepository<User,Integer>{
	Optional<User>findByEmail(String email);

}
