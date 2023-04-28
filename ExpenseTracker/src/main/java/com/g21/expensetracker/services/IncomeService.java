package com.g21.expensetracker.services;

import com.g21.expensetracker.models.Income;
import com.g21.expensetracker.repositories.IncomeRepository;
import com.g21.expensetracker.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncomeService {
    @Autowired IncomeRepository incomeRepo;
    @Autowired UsuarioRepository userRepo;
    public Income addIncome(Income newIncome, Integer id){
        Income auxincome = new Income(newIncome.getNombre(),newIncome.getMonto(),newIncome.getFecha(),newIncome.getCategoria(), newIncome.getDescripcion(),userRepo.getReferenceById(id));
        Income income = incomeRepo.save(auxincome);
        return income;
    }
}
