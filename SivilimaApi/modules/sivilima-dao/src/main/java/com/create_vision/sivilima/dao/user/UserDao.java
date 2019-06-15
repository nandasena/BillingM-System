package com.create_vision.sivilima.dao.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.create_vision.sivilima.domain.user.UserTO;

public interface UserDao extends JpaRepository<UserTO, Long> {

	@Query("select usr from UserTO usr where usr.userName = ?1")
    UserTO findByUsername(String username);
	
}
