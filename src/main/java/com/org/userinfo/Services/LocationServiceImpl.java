package com.org.userinfo.Services;

import com.org.userinfo.Models.Locations;
import com.org.userinfo.Repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    private LocationRepository locationRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<Locations> getAllLocations() {
        return this.locationRepository.findAll();
    }
}
