package com.create_vision.sivilima.domain.user;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

import com.create_vision.sivilima.domain.base.BaseObject;

@Entity
@Table(name = "T_USER")
public class UserTO extends BaseObject {

    /**
	 * 
	 */
	private static final long serialVersionUID = 5880011058317952730L;
	private String userName;
    private String password;
    private Set<RoleTO> roles;
    
    @Column(name = "USER_NAME", length = 100, nullable = false, unique = true)
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	@Column(name = "PASSWORD")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
    @ManyToMany
    @JoinTable(name = "T_USER_ROLE", joinColumns = @JoinColumn(name = "FK_USER"), inverseJoinColumns = @JoinColumn(name = "FK_ROLE"))
    public Set<RoleTO> getRoles() {
        return roles;
    }

    public void setRoles(Set<RoleTO> roles) {
        this.roles = roles;
    }
    
}
