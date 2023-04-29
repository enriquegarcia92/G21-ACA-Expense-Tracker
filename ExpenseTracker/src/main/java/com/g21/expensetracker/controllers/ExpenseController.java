package com.g21.expensetracker.controllers;

import com.g21.expensetracker.models.Expense;
import com.g21.expensetracker.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/expense")
public class ExpenseController {
    @Autowired
    ExpenseService expenseService;

    @PostMapping("/add/{id}")
    public ResponseEntity createExpense(@RequestBody @Valid Expense newExpense, @PathVariable Integer id) {
        expenseService.addExpense(newExpense,id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/get/{id}")
    public List<Expense> findExpense(@PathVariable Integer id) {
        return expenseService.getExpenses(id);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity updateExpense(@RequestBody Expense updatedExpense, @PathVariable Integer id) {
        expenseService.editExpense(updatedExpense, id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable("id") Integer id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.status(HttpStatus.GONE).build();
    }

    @GetMapping("/get/totalexpenses/{id}")
    public Double getTotalExpenses(@PathVariable Integer id)
    {
        return expenseService.gettotalexpenses(id);
    }

}
