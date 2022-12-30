package com.gigax.rent.Rent.Repository;

import com.gigax.rent.Rent.Model.Applicants;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface ApplicantRepository extends JpaRepository<Applicants, Integer>{
    
}
