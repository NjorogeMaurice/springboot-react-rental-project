package com.gigax.rent.Rent.Model;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.okta.commons.lang.Objects;

@Entity
@Table(name="notices")
public class Notices {
    private @Id Integer id; 
    private LocalDate daten;
	private String datan;
	

    public Notices(){}

    public Notices(Integer id,LocalDate date, String dataN){
        this.id = id;
        this.daten = date;
        this.datan = dataN;

    }

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Notices notice = (Notices) o;
		return Objects.nullSafeEquals(id, notice.id) &&
			Objects.nullSafeEquals(daten, notice.daten) &&
			Objects.nullSafeEquals(datan, notice.datan);
	}

	// @Override
	// public int hashCode() {

	// 	// return Objects.hashCode(id, firstName, lastName, roomNumber,password);
    //     return Objects.hashCode(true);

	// }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return daten;
	}

	public void setDate(LocalDate date) {
		this.daten = date;
	}

	public String getData() {
		return datan;
	}

	public void setData(String data) {
		this.datan = data;
	}

    
	@Override
	public String toString() {
		return "Notices{" +
			"id=" + id +
			", dateN='" + daten + '\'' +
			", dataN='" + datan + '\'' +
			'\'' +
			'}';
	}


}
