package com.g21.expensetracker.repositories;
import com.g21.expensetracker.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface IncomeRepository extends JpaRepository<Income,Integer> {
    @Query("SELECT SUM(i.monto) FROM Income i INNER JOIN i.user u WHERE u.id =:id")
    Double getTotalIncomes(Integer id);

    @Query("SELECT i FROM Income i INNER JOIN i.user u WHERE u.id=:id AND(i.nombre LIKE CONCAT('%',:query, '%') Or i.fecha LIKE CONCAT('%',:query, '%') Or i.descripcion LIKE CONCAT('%',:query, '%') Or i.categoria LIKE CONCAT('%',:query, '%'))")
    List<Income> getOnlyMyIncomes(Integer id, String query);
}
