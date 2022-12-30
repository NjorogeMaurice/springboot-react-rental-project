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

import com.gigax.rent.Rent.Model.Notices;
import com.gigax.rent.Rent.Model.Tenant;
import com.gigax.rent.Rent.Repository.NoticeRepository;
import com.gigax.rent.Rent.Repository.TenantRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RequestMapping("/notices")
@RestController
public class NoticesController {

    @Autowired
    private final NoticeRepository nR;

    public NoticesController(NoticeRepository noticeRepository){
        this.nR = noticeRepository;
    }

    @GetMapping
    public List<Notices> getNotices(){
        return nR.findAll();
    }


    @PostMapping
    public ResponseEntity<Notices> postNotice(@RequestBody Notices notice) throws URISyntaxException {
        Notices savedNotice = nR.save(notice);
        return ResponseEntity.created(new URI("/notice" + savedNotice.getId())).body(savedNotice);
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<Tenant> updateClient(@PathVariable Integer id, @RequestBody Tenant tenant) {
    //     Tenant currentTenant = tR.findById(id).orElseThrow(RuntimeException::new);
    //     currentTenant.setFirstName(tenant.getFirstName());
    //     currentTenant.setLastName(tenant.getLastName());
    //     currentTenant.setRoom(tenant.getRoom());
    //     currentTenant.setPass(tenant.getPass());
    //     currentTenant = tR.save(tenant);

    //     return ResponseEntity.ok(currentTenant);
    // }

    @DeleteMapping("/{id}")
    public ResponseEntity<Notices> deleteNotice(@PathVariable Integer id) {
        nR.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    
    
}
