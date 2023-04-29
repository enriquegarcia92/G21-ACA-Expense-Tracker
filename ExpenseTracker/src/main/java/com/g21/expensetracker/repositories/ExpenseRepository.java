package com.g21.expensetracker.repositories;

import com.g21.expensetracker.models.Expense;
import com.g21.expensetracker.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense,Integer> {

    @Query("SELECT SUM(e.monto) FROM Expense e INNER JOIN e.user u WHERE u.id =:id")
    Double getTotalExpense(Integer id);

    @Query("SELECT e FROM Expense e INNER JOIN e.user u WHERE u.id=:id")
    List<Expense> getOnlyMyExpenses(Integer id);
}
