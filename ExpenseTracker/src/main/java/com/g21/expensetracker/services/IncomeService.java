package com.g21.expensetracker.services;

import com.g21.expensetracker.models.Expense;
import com.g21.expensetracker.models.Income;
import com.g21.expensetracker.models.User;
import com.g21.expensetracker.repositories.IncomeRepository;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IncomeService {
    @Autowired IncomeRepository incomeRepo;
    @Autowired UsuarioRepository userRepo;
    public Income addIncome(Income newIncome, Integer id){
        Income auxincome = new Income(newIncome.getNombre(),newIncome.getMonto(),newIncome.getFecha(),newIncome.getCategoria(), newIncome.getDescripcion(),userRepo.getReferenceById(id));
        Income income = incomeRepo.save(auxincome);
        return income;
    }

    public List<Income> getIncomes(Integer id,String query){
        return incomeRepo.getOnlyMyIncomes(id,query);
    }

    public List<Income> getMyIncomesByDate(Integer id, String month, String year, String query){
        return incomeRepo.getOnlyMyIncomesByDate(id,month,year,query);
    }

    public Double getMontlyIncomeProm(Integer id, String month, String year){
        return incomeRepo.getAverageIncomeByMonthAndYear(id,month,year);
    }

    public List<String> getIncomeByCategory(Integer id, String month, String year){
        return incomeRepo.getTotalAmountByCategoryAndSorted(id,month,year);
    }

    public Income editIncome(Income newIncome, Integer incomeid){
        return incomeRepo.findById(incomeid)
                .map(income -> {
                    income.setNombre(newIncome.getNombre());
                    income.setMonto(newIncome.getMonto());
                    income.setFecha(newIncome.getFecha());
                    income.setCategoria(newIncome.getCategoria());
                    income.setDescripcion(newIncome.getDescripcion());
                    return incomeRepo.save(income);
                }).orElseGet(() -> {
                    return incomeRepo.save(newIncome);
                });
    }

    public void deleteIncome(Integer id) {
        Income delincome = incomeRepo.getReferenceById(id);
        incomeRepo.delete(delincome);
    }

    public Double gettotalIncomes(Integer id){
        return incomeRepo.getTotalIncomes(id);
    }
}
