package com.create_vision.sivilima.service.auth;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.create_vision.sivilima.domain.user.UserTO;

public interface ISecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password) throws UsernameNotFoundException, AuthenticationException, Exception;
    
    UserTO fetchLoggedInUser() throws Exception;
}
