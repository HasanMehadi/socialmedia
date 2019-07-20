package com.org.userinfo.Services;



import com.org.userinfo.Models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {

    public User save(User user);
    public Page<User> findAll(Pageable pageable);
    public User getUserByEmail(String email);
    public User getUserById(Long id);
    public User getUserByUserName(String username);
}
