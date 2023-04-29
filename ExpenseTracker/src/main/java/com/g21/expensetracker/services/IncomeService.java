package com.g21.expensetracker.services;

import com.g21.expensetracker.models.Income;
import com.g21.expensetracker.models.User;
import com.g21.expensetracker.repositories.IncomeRepository;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeService {
    @Autowired IncomeRepository incomeRepo;
    @Autowired UsuarioRepository userRepo;
    public Income addIncome(Income newIncome, Integer id){
        Income auxincome = new Income(newIncome.getNombre(),newIncome.getMonto(),newIncome.getFecha(),newIncome.getCategoria(), newIncome.getDescripcion(),userRepo.getReferenceById(id));
        Income income = incomeRepo.save(auxincome);
        return income;
    }

    public List<Income> getIncomes(){
        return incomeRepo.findAll();
    }

    public Income editIncome(Income newIncome, Integer incomeid,Integer userid){
        User auxuser = userRepo.getReferenceById(userid);
        return incomeRepo.findById(incomeid)
                .map(income -> {
                    income.setNombre(newIncome.getNombre());
                    income.setMonto(newIncome.getMonto());
                    income.setFecha(newIncome.getFecha());
                    income.setCategoria(newIncome.getCategoria());
                    income.setDescripcion(newIncome.getDescripcion());
                    income.setUser(auxuser);
                    return incomeRepo.save(income);
                }).orElseGet(() -> {
                    return incomeRepo.save(newIncome);
                });
    }
}
