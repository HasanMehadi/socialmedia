package com.org.userinfo.Repositories;

import com.org.userinfo.Models.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusRepository extends JpaRepository<Status,Long>{

     List<Status> findByEnabled(boolean enable);

     List<Status> findByUser_id(long id);


}
