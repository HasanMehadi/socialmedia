package com.org.userinfo.Controllers.Status;

import com.org.userinfo.Configurations.ModelEntityConversionUtil;
import com.org.userinfo.Configurations.Response;
import com.org.userinfo.DTO.StatusDTO;
import com.org.userinfo.Models.Status;
import com.org.userinfo.Services.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "status")
public class StatusController {

    @Autowired
    private StatusService statusService;

    @GetMapping(value = "show")
    public ResponseEntity<List<Status>> getStatusByShow(@RequestParam("show") boolean show){

        try{

            return new ResponseEntity<>(statusService.getStatusByShow(show), HttpStatus.OK);

        }catch (Exception ex){
            System.out.println(ex.getCause().getMessage());
            return ResponseEntity.noContent().header(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase(),HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase()).build();
        }


    }

    @GetMapping(value = "user")
    public ResponseEntity<List<Status>> getStatusByUser(@RequestParam("id") long id){

        try{

            return new ResponseEntity<>(statusService.getStatusByUser(id), HttpStatus.OK);

        }catch (Exception ex){
            System.out.println(ex.getCause().getMessage());
            return ResponseEntity.noContent().header(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase(),HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase()).build();
        }

    }

    @PostMapping(value = "save")
    public ResponseEntity<Response> saveStatus(@RequestBody StatusDTO statusDTO){

        try{

            statusService.saveStatus(ModelEntityConversionUtil.convert(statusDTO,Status.class));
            return new ResponseEntity<>(new Response("true"),HttpStatus.OK);
        }catch (Exception ex){
            System.out.println(ex.getCause().getMessage());
            return ResponseEntity.noContent().header(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase(),HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.getReasonPhrase()).build();
        }
    }


}
