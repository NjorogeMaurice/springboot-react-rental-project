package com.gigax.rent.Rent.Repository;

import com.gigax.rent.Rent.Model.Notices;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface NoticeRepository extends JpaRepository<Notices, Integer>{   
    
}