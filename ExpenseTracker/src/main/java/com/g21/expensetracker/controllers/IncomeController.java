package com.g21.expensetracker.controllers;

import com.g21.expensetracker.models.Income;
import com.g21.expensetracker.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/income")
public class IncomeController {
    @Autowired
    IncomeService incomeService;
    @PostMapping("/add/{id}")
    public ResponseEntity createIncome(@RequestBody @Valid Income newIncome, @PathVariable Integer id) {
        incomeService.addIncome(newIncome,id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
