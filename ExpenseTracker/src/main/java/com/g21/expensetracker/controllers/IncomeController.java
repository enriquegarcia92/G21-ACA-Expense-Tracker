package com.g21.expensetracker.controllers;

import com.g21.expensetracker.models.Income;
import com.g21.expensetracker.models.User;
import com.g21.expensetracker.repositories.IncomeRepository;
import com.g21.expensetracker.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/income")
public class IncomeController {
    @Autowired  IncomeService incomeService;
    @Autowired IncomeRepository incomerepo;
    @PostMapping("/add/{id}")
    public ResponseEntity createIncome(@RequestBody @Valid Income newIncome, @PathVariable Integer id) {
        incomeService.addIncome(newIncome,id);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/get")
    public List<Income> findIncomes() {
        return incomeService.getIncomes();
    }

    @PutMapping("/edit/{idincome}/{userid}")
    public ResponseEntity updateIncome(@RequestBody Income updatedIncome, @PathVariable Integer idincome, @PathVariable Integer userid) {
        incomeService.editIncome(updatedIncome, idincome,userid);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

}
