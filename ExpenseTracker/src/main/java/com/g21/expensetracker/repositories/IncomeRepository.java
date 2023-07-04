package com.g21.expensetracker.repositories;
import com.g21.expensetracker.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface IncomeRepository extends JpaRepository<Income,Integer> {
    @Query("SELECT SUM(i.monto) FROM Income i INNER JOIN i.user u WHERE u.id =:id")
    Double getTotalIncomes(Integer id);

    @Query("SELECT ROUND(AVG(i.monto), 2) FROM Income i INNER JOIN i.user u WHERE u.id = :id AND SUBSTRING(i.fecha, 4, 2) = :month AND SUBSTRING(i.fecha, 7) = :year")
    Double getAverageIncomeByMonthAndYear(Integer id, String month, String year);

    @Query("SELECT i FROM Income i INNER JOIN i.user u WHERE u.id=:id AND(i.nombre LIKE CONCAT('%',:query, '%') Or i.fecha LIKE CONCAT('%',:query, '%') Or i.descripcion LIKE CONCAT('%',:query, '%') Or i.categoria LIKE CONCAT('%',:query, '%'))")
    List<Income> getOnlyMyIncomes(Integer id, String query);

    @Query("SELECT i FROM Income i INNER JOIN i.user u WHERE u.id=:id AND SUBSTRING(i.fecha, 4, 2) = :month AND SUBSTRING(i.fecha, 7) = :year AND(i.nombre LIKE CONCAT('%',:query, '%') Or i.fecha LIKE CONCAT('%',:query, '%') Or i.descripcion LIKE CONCAT('%',:query, '%') Or i.categoria LIKE CONCAT('%',:query, '%'))")
    List<Income> getOnlyMyIncomesByDate(Integer id, String month, String year,String query);

    @Query("SELECT CONCAT(i.categoria, ',', SUM(i.monto)) FROM Income i INNER JOIN i.user u WHERE u.id=:id AND  SUBSTRING(i.fecha, 4, 2) = :month AND SUBSTRING(i.fecha, 7) = :year GROUP BY i.categoria ORDER BY SUM(i.monto) DESC")
    List<String> getTotalAmountByCategoryAndSorted(Integer id, String month, String year);


}
