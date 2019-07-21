package com.org.userinfo.Services;

import com.org.userinfo.Models.Status;
import com.org.userinfo.Repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class StatusServiceImpl implements StatusService{

    @Autowired
    private StatusRepository statusRepository;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<Status> getStatusByShow(boolean enable) {
          return statusRepository.findByEnabled(enable);
    }

    @Override
    @Transactional
    public List<Status> getStatusByUser(long id) {
        List<Status> s ;

        s= statusRepository.findByUser_id(id);
        return s;
    }

    @Override
    @Transactional
    @Async
    public boolean saveStatus(Status status) {

        Status saveStatus = statusRepository.save(status);
        if(saveStatus != null){
            return true;
        }

        return false;
    }

    @Override
    public Status getStatusById(long id) {
        return statusRepository.getById(id) ;
    }


    @Override
    public boolean updateStatus(Status status) {
        Status saveStatus = statusRepository.save(status);
        if(saveStatus != null){
            return true;
        }

        return false;
    }
}
