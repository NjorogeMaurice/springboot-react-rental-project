package com.gigax.rent.Rent.Controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gigax.rent.Rent.Model.Tenant;
import com.gigax.rent.Rent.Repository.TenantRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RequestMapping("/tenant")
@RestController
public class TenantController {

    @Autowired
    private final TenantRepository tR;

    public TenantController(TenantRepository tenantRepository){
        this.tR = tenantRepository;
    }

    @GetMapping
    public List<Tenant> getTenants(){
        return tR.findAll();
    }

    @GetMapping("/{id}")
    public Tenant getTenant(@PathVariable Integer id){
        return tR.findById(id).orElseThrow(RuntimeException::new);
    }
    @PostMapping
    public ResponseEntity<Tenant> createTenant(@RequestBody Tenant tenant) throws URISyntaxException {
        Tenant savedTenant = tR.save(tenant);
        return ResponseEntity.created(new URI("/tenant" + savedTenant.getId())).body(savedTenant);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tenant> updateClient(@PathVariable Integer id, @RequestBody Tenant tenant) {
        Tenant currentTenant = tR.findById(id).orElseThrow(RuntimeException::new);
        currentTenant.setFirstName(tenant.getFirstName());
        currentTenant.setLastName(tenant.getLastName());
        currentTenant.setRoom(tenant.getRoom());
        currentTenant.setPass(tenant.getPass());
        currentTenant.setPhone(tenant.getPhone());
        currentTenant = tR.save(tenant);

        return ResponseEntity.ok(currentTenant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Tenant> deleteClient(@PathVariable Integer id) {
        tR.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    
    
}
