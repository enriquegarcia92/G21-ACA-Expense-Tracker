package com.g21.expensetracker.repositories;

import com.g21.expensetracker.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomeRepository extends JpaRepository<Income,Integer> {
}
