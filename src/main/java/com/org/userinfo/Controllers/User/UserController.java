package com.org.userinfo.Controllers.User;


import com.org.userinfo.Configurations.*;
import com.org.userinfo.DTO.UserDTO;
import com.org.userinfo.Models.User;
import com.org.userinfo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.security.Principal;


@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUserDetailsServiceImpl jwtUserDetailsService;

    @GetMapping("getUser")
    @PreAuthorize("hasAnyRole('ADMIN') or hasAnyRole('USER')")
    public ResponseEntity<User> getUser(Principal principal) {

        User user = userService.getUserByEmail(principal.getName());
        return new ResponseEntity<>(user, HttpStatus.OK);

    }

    @GetMapping("users")
    @PreAuthorize("hasAnyAuthority('ADMIN') or hasAnyAuthority('USER')")
    public ResponseEntity<Page<UserDTO>> getUserByPage(Pageable pageable) {

        try{
            return new ResponseEntity<>(ModelEntityConversionUtil.convertPage(userService.findAll(pageable),UserDTO.class),HttpStatus.OK);
        }catch (Exception ex){
            return ResponseEntity.noContent().header(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase(),HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase()).build();
        }

    }
}
