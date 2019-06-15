package com.create_vision.sivilima.api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.create_vision.sivilima.domain.model.ErrorModel;
import com.create_vision.sivilima.domain.model.LoginModel;
import com.create_vision.sivilima.service.auth.ISecurityService;

@Controller
@RequestMapping("/")
public class AuthenticationManagerApi {

	@Autowired
	private ISecurityService securityService;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> doLogin(@RequestBody LoginModel loginModel) throws Exception {
		
		try {
			securityService.autologin(loginModel.getUserName(), loginModel.getPassword());
			return ResponseEntity.ok(null);
		} catch(UsernameNotFoundException e) {
//			logger.error("Exception occured. ", e);
			ErrorModel errorModel = new ErrorModel();
			errorModel.setErrorCode("4001");
			errorModel.setErrorMsg("Username Not Found Error");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorModel);
		} catch(AuthenticationException e) {
//			logger.error("Exception occured. ", e);
			ErrorModel errorModel = new ErrorModel();
			errorModel.setErrorCode("4002");
			errorModel.setErrorMsg("Authentication Error");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorModel);
		} catch(Exception e) {
//			logger.error("Exception occured. ", e);
			ErrorModel errorModel = new ErrorModel();
			errorModel.setErrorCode("5001");
			errorModel.setErrorMsg("Unexpected Api Error");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorModel);
		}			
	}
	
}
