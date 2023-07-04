package com.g21.expensetracker.repositories;

import com.g21.expensetracker.models.Expense;
import com.g21.expensetracker.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense,Integer> {

    @Query("SELECT SUM(e.monto) FROM Expense e INNER JOIN e.user u WHERE u.id =:id")
    Double getTotalExpense(Integer id);


    @Query("SELECT SUM(e.monto) FROM Expense e INNER JOIN e.user u WHERE u.id = :id AND SUBSTRING(e.fecha, 4, 2) = :month AND SUBSTRING(e.fecha, 7) = :year")
    Double getTotalExpenseByMonthAndYear(Integer id,String month,String year);

    @Query("SELECT e FROM Expense e INNER JOIN e.user u WHERE u.id=:id AND(e.categoria LIKE CONCAT('%',:query, '%') Or e.descripcion LIKE CONCAT('%',:query, '%') Or e.fecha LIKE CONCAT('%',:query, '%') Or e.nombre LIKE CONCAT('%',:query, '%'))")
    List<Expense> getOnlyMyExpenses(Integer id, String query);

    @Query("SELECT e FROM Expense e INNER JOIN e.user u WHERE u.id=:id AND SUBSTRING(e.fecha, 4, 2) = :month AND SUBSTRING(e.fecha, 7) = :year  AND(e.categoria LIKE CONCAT('%',:query, '%') Or e.descripcion LIKE CONCAT('%',:query, '%') Or e.fecha LIKE CONCAT('%',:query, '%') Or e.nombre LIKE CONCAT('%',:query, '%'))")
    List<Expense> getOnlyMyExpensesSortByDate(Integer id,String month, String year, String query);

    @Query("SELECT e.categoria FROM Expense e INNER JOIN e.user u WHERE u.id = :id AND SUBSTRING(e.fecha, 4, 2) = :month AND SUBSTRING(e.fecha, 7) = :year ORDER BY e.monto DESC")
    List<String> getOnlyMyExpensesSortedByMontoAndFiltered(Integer id, String month, String year);
    @Query("SELECT CONCAT(e.categoria, ',', SUM(e.monto)) FROM Expense e INNER JOIN e.user u WHERE u.id=:id AND  SUBSTRING(e.fecha, 4, 2) = :month AND SUBSTRING(e.fecha, 7) = :year GROUP BY e.categoria ORDER BY SUM(e.monto) DESC")
    List<String> getTotalAmountByCategoryAndSorted(Integer id, String month, String year);

}
