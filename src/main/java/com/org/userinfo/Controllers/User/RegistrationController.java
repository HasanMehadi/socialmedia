package com.org.userinfo.Controllers.User;

import com.org.userinfo.Models.Locations;
import com.org.userinfo.Models.User;
import com.org.userinfo.Services.LocationService;
import com.org.userinfo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.org.userinfo.Configurations.Response;


import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/")
public class RegistrationController {

    @Autowired
    private UserService userService;

    @Autowired
    private LocationService locationService;

    @PostMapping(value = "registration")
    public ResponseEntity<Response> registration(@RequestBody User user){

       try{
           User dbUser = userService.save(user);

           if(dbUser != null){
               return new ResponseEntity<>(new Response("true"), HttpStatus.OK);
           }
       }catch (Exception ex){
           return new ResponseEntity<>(new Response(ex.getCause().getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
       }

        System.out.println("User Saved Failed");

       return null;

    }

    @GetMapping(value = "checkEmail")
    public ResponseEntity<Response> checkEmail(@RequestParam("email") String email){

        User user ;

       try{
           user = userService.getUserByEmail(email);
           if(user == null){
               return new ResponseEntity<>(new Response("true"), HttpStatus.OK);
           }else {
               return new ResponseEntity<>(new Response("false"), HttpStatus.OK);
           }

       }catch (Exception ex){
           System.out.println(ex.getCause().getMessage());
           return new ResponseEntity<>(new Response("false"), HttpStatus.BAD_REQUEST);
       }

    }
    @GetMapping(value = "checkUserName")
    public ResponseEntity<Response> checkUserName(@Valid @RequestParam("username") String username){

        User user;

        try{
            if(username != null){
                user = userService.getUserByUserName(username);
                if(user == null){
                    return new ResponseEntity<>(new Response("true"), HttpStatus.OK);
                }
            }

        }catch (Exception ex){
            System.out.println(ex.getCause().getMessage());
            return new ResponseEntity<>(new Response("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(new Response("false"), HttpStatus.OK);
    }

    @GetMapping(value = "location")
    public ResponseEntity<List<Locations>> getAllLocations(){

        try{

            return new ResponseEntity<>(locationService.getAllLocations(), HttpStatus.OK);


        }catch (Exception ex){

            System.out.println(ex.getCause().getMessage());
        }

        return ResponseEntity.noContent().header(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase(),HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase()).build();
    }
}
