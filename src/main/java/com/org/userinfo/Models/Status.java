package com.org.userinfo.Models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
public class Status implements Serializable{


    private static final long serialVersionUID = -7252831764959280047L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String statuses;

    @NotNull
    private boolean enabled;

    @OneToOne(targetEntity = Locations.class)
    @JoinColumn(name = "location")
    @NotNull
    private Locations location;

    @NotNull
    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user")
    private User user;

    public Status() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatuses() {
        return statuses;
    }

    public void setStatuses(String statuses) {
        this.statuses = statuses;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Locations getLocation() {
        return location;
    }

    public void setLocation(Locations location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
