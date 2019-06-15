package com.create_vision.sivilima.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.create_vision.sivilima.domain.model.UserModel;
import com.create_vision.sivilima.domain.model.ErrorModel;
import com.create_vision.sivilima.domain.user.UserTO;
import com.create_vision.sivilima.service.user.IUserService;

@Controller
@RequestMapping("/users")
public class UserManagerApi {

	@Autowired
	private IUserService userService;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public UserTO getUser(@PathVariable("id") String id) throws Exception {
		//@RequestBody SearchCriteria searchCriteria, @PathVariable("cidn") String cidn, @RequestParam("page") Integer page, @RequestParam("pageSize") Integer pageSize
		try {
			UserTO user = new UserTO();
			user.setUserName("David");
			user.setPassword("David Pwd");
			return user;
		} catch(Exception e) {
//			logger.error("Exception occured. ", e);
			throw e;
		}			
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> createUser(@RequestBody UserModel userTO) throws Exception {
		
		try {
			userService.createUser(userTO);
			return ResponseEntity.ok(null);
		} catch(Exception e) {
//			logger.error("Exception occured. ", e);
			ErrorModel errorModel = new ErrorModel();
			errorModel.setErrorCode("5001");
			errorModel.setErrorMsg("Unexpected Api Error");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorModel);
		}			
	}
	
//	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
//	@ResponseBody
//	public List<String> list(@RequestBody SearchCriteria searchCriteria, @PathVariable("cidn") String cidn, @RequestParam("page") Integer page, @RequestParam("pageSize") Integer pageSize) throws Exception {
//		
//		try {
//			Map<String, Object> searchMap = new HashMap<String, Object>();
//			searchMap.put("cidn", cidn);
//			searchMap.put("startDateTime", searchCriteria.getStartDateTime());
//			searchMap.put("startDateTime", searchCriteria.getStartDateTime());
//			searchMap.put("mobileNumber", searchCriteria.getMobileNumber());
//			searchMap.put("imei", searchCriteria.getImei());
//			return alertEventService.getUserList();
//		} catch(Exception e) {
//			logger.error("Exception occured. ", e);
//			throw e;
//		}			
//	}
	
}
