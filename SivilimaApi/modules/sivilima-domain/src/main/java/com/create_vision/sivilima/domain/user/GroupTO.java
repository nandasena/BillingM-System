package com.create_vision.sivilima.domain.user;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.create_vision.sivilima.domain.base.BaseObject;

@Entity
@Table(name = "T_GROUP")
public class GroupTO extends BaseObject {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4518181289977993259L;
	private String groupName;
	private String groupCode;
	private Set<RoleTO> roles;
	
	@Column(name = "GROUP_NAME")
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	@Column(name = "GROUP_CODE", length = 100, nullable = false, unique = true)
	public String getGroupCode() {
		return groupCode;
	}
	public void setGroupCode(String groupCode) {
		this.groupCode = groupCode;
	}
	@OneToMany(mappedBy = "group", cascade=CascadeType.ALL)
	public Set<RoleTO> getRoles() {
		return roles;
	}
	public void setRoles(Set<RoleTO> roles) {
		this.roles = roles;
	}
	
	
	
}
