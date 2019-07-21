package com.org.userinfo.Services;

import com.org.userinfo.Models.Status;

import java.util.List;

public interface StatusService {

    public List<Status> getStatusByShow(boolean show);

    public List<Status> getStatusByUser(long id);

    public boolean saveStatus(Status status);

    public Status getStatusById(long id);

    public boolean updateStatus(Status status);
}
