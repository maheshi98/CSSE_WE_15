package com.example.procurement.Service;

import com.example.procurement.Entity.UserEntity;
import com.example.procurement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
    }

     public UserEntity saveUser(UserEntity userEntity){
        return userRepository.save(userEntity);
    }
}
