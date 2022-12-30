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

import com.gigax.rent.Rent.Model.Applicants;
import com.gigax.rent.Rent.Repository.ApplicantRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RequestMapping("/apply")
@RestController
public class ApplicantController {

    @Autowired
    private final ApplicantRepository tR;

    public ApplicantController(ApplicantRepository tenantRepository){
        this.tR = tenantRepository;
    }

    @GetMapping
    public List<Applicants> getTenants(){
        return tR.findAll();
    }

    @GetMapping("/{id}")
    public Applicants getTenant(@PathVariable Integer id){
        return tR.findById(id).orElseThrow(RuntimeException::new);
    }
    @PostMapping
    public ResponseEntity<Applicants> createTenant(@RequestBody Applicants tenant) throws URISyntaxException {
        Applicants savedTenant = tR.save(tenant);
        return ResponseEntity.created(new URI("/apply" + savedTenant.getId())).body(savedTenant);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Applicants> updateClient(@PathVariable Integer id, @RequestBody Applicants tenant) {
        Applicants currentTenant = tR.findById(id).orElseThrow(RuntimeException::new);
        currentTenant.setFirstName(tenant.getFirstName());
        currentTenant.setLastName(tenant.getLastName());
        currentTenant.setRoom(tenant.getRoom());
        currentTenant.setPhone(tenant.getPhone());
        currentTenant = tR.save(tenant);

        return ResponseEntity.ok(currentTenant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Applicants> deleteClient(@PathVariable Integer id) {
        tR.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    
    
}
