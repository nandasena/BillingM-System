package com.create_vision.sivilima.domain.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.create_vision.sivilima.domain.base.BaseObject;

@Entity
@Table(name = "T_ROLE")
public class RoleTO extends BaseObject {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8499096801093687442L;

	private String roleName;
	private String roleCode;
	private GroupTO group;
	
	@Column(name = "ROLE_NAME")
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	@Column(name = "ROLE_CODE", length = 100, nullable = false, unique = true)
	public String getRoleCode() {
		return roleCode;
	}
	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}
	@ManyToOne
	@JoinColumn(name="FK_GROUP", nullable = false)
	public GroupTO getGroup() {
		return group;
	}
	public void setGroup(GroupTO group) {
		this.group = group;
	}
	
}
