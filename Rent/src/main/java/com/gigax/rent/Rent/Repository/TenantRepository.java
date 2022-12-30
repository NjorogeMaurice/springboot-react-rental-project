package com.gigax.rent.Rent.Repository;

import com.gigax.rent.Rent.Model.Tenant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface TenantRepository extends JpaRepository<Tenant, Integer>{   
    
}
