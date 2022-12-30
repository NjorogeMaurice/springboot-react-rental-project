package com.gigax.rent.Rent.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.okta.commons.lang.Objects;

@Entity
@Table(name="applicants")
public class Applicants {
    private @Id Integer id; 
    private String firstname;
	private String lastname;
	private String roomnumber;
	private String phonenumber;

    public Applicants(){}

    public Applicants(Integer id, String fname, String lname, String roomno, String phoneno){
        this.id = id;
        this.firstname = fname;
        this.lastname = lname;
        this.roomnumber = roomno;
		this.phonenumber=phoneno;
    }

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Applicants tenant = (Applicants) o;
		return Objects.nullSafeEquals(id, tenant.id) &&
			Objects.nullSafeEquals(firstname, tenant.firstname) &&
			Objects.nullSafeEquals(lastname, tenant.lastname) &&
			Objects.nullSafeEquals(roomnumber, tenant.roomnumber)&&
			Objects.nullSafeEquals(phonenumber, tenant.phonenumber);
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

	public String getFirstName() {
		return firstname;
	}

	public void setFirstName(String firstName) {
		this.firstname = firstName;
	}

	public String getLastName() {
		return lastname;
	}

	public void setLastName(String lastName) {
		this.lastname = lastName;
	}

	public String getRoom() {
		return roomnumber;
	}

	public String getPhone() {
		return phonenumber;
	}

	public void setRoom(String room) {
		this.roomnumber = room;
	}

	public void setPhone(String phone) {
		this.phonenumber = phone;
	}

	@Override
	public String toString() {
		return "Tenant{" +
			"id=" + id +
			", firstName='" + firstname + '\'' +
			", lastName='" + lastname + '\'' +
			", room number='" + roomnumber + '\'' +
			", phone number='" + phonenumber + '\'' +
			'}';
	}


}
