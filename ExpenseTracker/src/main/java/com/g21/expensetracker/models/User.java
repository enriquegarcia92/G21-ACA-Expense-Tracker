package com.g21.expensetracker.models;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="usuarios")
public class User implements UserDetails {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable= false, unique= true, length= 150 ,name = "nombrecompleto")
	private String nombrecompleto;
	@Column(nullable= false, unique= true, length= 150 ,name = "email")
	private String email;
	@Column(nullable= false, length=128, name = "password")
	private String password;

	@Column(nullable= false, name = "salary")
	private Double salary;

	@Column(nullable= false,length = 150, name = "budgetlimit")
	private Double budgetlimit;
	@Column(nullable= false, name = "password_state")
	private Boolean passwordState;

	@Column(nullable= false, name = "role")
	@Enumerated(EnumType.STRING)
	  private Role role;


	public User() {
		 super();
	}

	public User(String nombrecompleto, String email, String password,Double salary, Double budgetlimit, Role role, Boolean passwordState) {
		this.nombrecompleto = nombrecompleto;
		this.email = email;
		this.password = password;
		this.role = role;
		this.salary= salary;
		this.budgetlimit = budgetlimit;
		this.passwordState = passwordState;
	}

	@Override
	  public Collection<? extends GrantedAuthority> getAuthorities() {
	    return List.of(new SimpleGrantedAuthority(Role.USER.toString()));
	  }

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombrecompleto() {
		return nombrecompleto;
	}

	public void setNombrecompleto(String nombrecompleto) {
		this.nombrecompleto = nombrecompleto;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public Double getBudgetlimit() {
		return budgetlimit;
	}

	public void setBudgetlimit(Double budgetlimit) {
		this.budgetlimit = budgetlimit;
	}

	public Boolean getPasswordState() {
		return passwordState;
	}

	public void setPasswordState(Boolean passwordState) {
		this.passwordState = passwordState;
	}
}
