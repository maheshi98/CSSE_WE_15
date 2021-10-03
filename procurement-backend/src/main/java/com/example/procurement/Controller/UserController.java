package com.example.procurement.Controller;

import com.example.procurement.Entity.UserEntity;
import com.example.procurement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "seniorManager")
    public UserEntity createUser(@RequestBody UserEntity user){
        return userRepository.save(user);
    }
    @GetMapping("login/{email}")
    public Optional<UserEntity> findUserDetails(@PathVariable String email){
        return (Optional<UserEntity>) userRepository.findById(email);
    }

}
