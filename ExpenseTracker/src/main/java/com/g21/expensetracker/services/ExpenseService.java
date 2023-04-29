package com.g21.expensetracker.services;
import com.g21.expensetracker.models.Expense;
import com.g21.expensetracker.repositories.ExpenseRepository;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {
    @Autowired
    ExpenseRepository expenseRepo;
    @Autowired
    UsuarioRepository userRepo;
    public Expense addExpense(Expense newExpense, Integer id){
        Expense auxexpense = new Expense(newExpense.getNombre(),newExpense.getMonto(),newExpense.getFecha(),newExpense.getCategoria(), newExpense.getDescripcion(),userRepo.getReferenceById(id));
        Expense expense = expenseRepo.save(auxexpense);
        return expense;
    }
    public List<Expense> getExpenses(Integer id){
        return expenseRepo.getOnlyMyExpenses(id);
    }

    public void deleteExpense(Integer id) {
        Expense delexpense = expenseRepo.getReferenceById(id);
        expenseRepo.delete(delexpense);
    }
    public Double gettotalexpenses(Integer id){
        return expenseRepo.getTotalExpense(id);
    }

    public Expense editExpense(Expense newExpense, Integer expenseid){
        return expenseRepo.findById(expenseid)
                .map(expense -> {
                    expense.setNombre(newExpense.getNombre());
                    expense.setMonto(newExpense.getMonto());
                    expense.setFecha(newExpense.getFecha());
                    expense.setCategoria(newExpense.getCategoria());
                    expense.setDescripcion(newExpense.getDescripcion());
                    return expenseRepo.save(expense);
                }).orElseGet(() -> {
                    return expenseRepo.save(newExpense);
                });
    }
}
