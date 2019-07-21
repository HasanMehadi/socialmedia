package com.org.userinfo.Models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
public class Locations implements Serializable{


    private static final long serialVersionUID = 95917852589025229L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long location_id;

    @NotNull
    private String location;

    public Locations() {

    }

    public Locations(long location_id){
        this.location_id=location_id;
    }


    public Long getLocation_id() {
        return location_id;
    }

    public void setLocation_id(Long location_id) {
        this.location_id = location_id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
