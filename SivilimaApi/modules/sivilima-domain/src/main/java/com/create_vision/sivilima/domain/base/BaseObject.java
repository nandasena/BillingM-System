package com.create_vision.sivilima.domain.base;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public class BaseObject implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5553688390351585204L;
	
	protected Long pkId;
	protected Long createdBy;
	protected Date createdDt;	
	protected Long lstUpdBy;	
	protected Date lstUpdDt;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "PK_ID")
	public Long getPkId() {
		return pkId;
	}
	public void setPkId(Long pkId) {
		this.pkId = pkId;
	}
	@Column(name = "CREATED_BY")
	public Long getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}	
	@Column(name = "CREATED_DT")
	@Temporal(TemporalType.TIMESTAMP)	
	public Date getCreatedDt() {
		return createdDt;
	}
	public void setCreatedDt(Date createdDt) {
		this.createdDt = createdDt;
	}
	@Column(name = "LST_UPD_BY")
	public Long getLstUpdBy() {
		return lstUpdBy;
	}
	public void setLstUpdBy(Long lstUpdBy) {
		this.lstUpdBy = lstUpdBy;
	}
	@Column(name = "LST_UPD_DT")
	@Temporal(TemporalType.TIMESTAMP)
	public Date getLstUpdDt() {
		return lstUpdDt;
	}
	public void setLstUpdDt(Date lstUpdDt) {
		this.lstUpdDt = lstUpdDt;
	}

}
