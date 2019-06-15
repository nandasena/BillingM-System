package com.create_vision.sivilima.dao.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.create_vision.sivilima.domain.user.RoleTO;

public interface RoleDao extends JpaRepository<RoleTO, Long>  {

	@Query("select rol from RoleTO rol inner join rol.group grp where grp.groupCode = ?1")
    List<RoleTO> findByRolesByGroupCode(String groupCode);
	
}
