package com.create_vision.sivilima.service.user;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.create_vision.sivilima.dao.user.RoleDao;
import com.create_vision.sivilima.dao.user.UserDao;
import com.create_vision.sivilima.domain.model.UserModel;
import com.create_vision.sivilima.domain.user.RoleTO;
import com.create_vision.sivilima.domain.user.UserTO;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private RoleDao roleDao;
	
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public void createUser(UserModel user) throws Exception {
		UserTO newUser = new UserTO();
		newUser.setUserName(user.getUserName());
		newUser.setPassword(bCryptPasswordEncoder.encode(user.getUserName()));
		Set<RoleTO> roles = new HashSet<>(roleDao.findByRolesByGroupCode(user.getGroupCode()));
		newUser.setRoles(roles);
//      Role roleUser = roleRepository.fetchRoleByName("ROLE_USER");
//      Set<Role> roles = new HashSet<>();
//      roles.add(roleUser);
//      user.setRoles(roles);
	    userDao.save(newUser);
		
	}

    @Override
    public UserTO findByUsername(String username) throws Exception {
        return userDao.findByUsername(username);
    }

}
