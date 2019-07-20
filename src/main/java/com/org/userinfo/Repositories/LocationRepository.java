package com.org.userinfo.Repositories;

import com.org.userinfo.Models.Locations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Locations, Long>{

}
