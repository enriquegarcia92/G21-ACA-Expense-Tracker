package com.g21.expensetracker.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.g21.expensetracker.models.User;
import org.springframework.data.jpa.repository.Query;


public interface UsuarioRepository extends JpaRepository<User,Integer>{
	Optional<User>findByEmail(String email);
	Optional<User>findByNombrecompleto(String nombrecompleto);


	@Query("SELECT u FROM User u WHERE u.email =?1")
	User UserfindExistence(String email);

}
