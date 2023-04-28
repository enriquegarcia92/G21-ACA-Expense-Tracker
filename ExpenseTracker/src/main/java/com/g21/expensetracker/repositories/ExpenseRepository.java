package com.g21.expensetracker.repositories;

import com.g21.expensetracker.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense,Integer> {
}
