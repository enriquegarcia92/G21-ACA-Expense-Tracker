package com.g21.expensetracker.controllers;

import com.g21.expensetracker.models.Expense;
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
    @PostMapping("/add/{id}")
    public ResponseEntity createIncome(@RequestBody @Valid Income newIncome, @PathVariable Integer id) {
        incomeService.addIncome(newIncome,id);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/get/{id}")
    public List<Income> findIncomes(@RequestParam("query") String query, @PathVariable Integer id) {
        return incomeService.getIncomes(id, query);
    }

    @PutMapping("/edit/{idincome}")
    public ResponseEntity updateIncome(@RequestBody Income updatedIncome, @PathVariable Integer idincome) {
        incomeService.editIncome(updatedIncome, idincome);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable("id") Integer id) {
        incomeService.deleteIncome(id);
        return ResponseEntity.status(HttpStatus.GONE).build();
    }

    @GetMapping("/get/totalincomes/{id}")
    public Double getTotalIncomes(@PathVariable Integer id)
    {
        return incomeService.gettotalIncomes(id);
    }

    @GetMapping("/get/searchincomesbydate/{id}")
    public List<Income> getIncomesByCategory(@RequestParam("month") String month, @RequestParam("year") String year, @RequestParam("query") String query, @PathVariable Integer id){
        return incomeService.getMyIncomesByDate(id,month,year,query);
    }

    @GetMapping("/get/monthlyprom/{id}")
    public Double getMonthlyExpensE(@RequestParam("month") String month, @RequestParam("year") String year, @PathVariable Integer id){
        return incomeService.getMontlyIncomeProm(id,month,year);
    }

    @GetMapping("/get/incomebycategory/{id}")
    public List<String> getIncomeByCategory(@RequestParam("month") String month, @RequestParam("year") String year, @PathVariable Integer id){
        return incomeService.getIncomeByCategory(id,month,year);
    }


    @GetMapping("/details/{id}")
    public Optional<Income> getProfile(@PathVariable Integer id){
        return incomeService.getIncomeDetails(id);
    }



}
