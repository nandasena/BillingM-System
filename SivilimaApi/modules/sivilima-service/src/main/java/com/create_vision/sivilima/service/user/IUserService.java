package com.create_vision.sivilima.service.user;

import com.create_vision.sivilima.domain.model.UserModel;
import com.create_vision.sivilima.domain.user.UserTO;

public interface IUserService {

	public void createUser(UserModel user) throws Exception;
	public UserTO findByUsername(String username) throws Exception;
}
