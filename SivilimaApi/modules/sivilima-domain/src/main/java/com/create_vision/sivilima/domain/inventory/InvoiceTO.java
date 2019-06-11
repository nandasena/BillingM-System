package com.create_vision.sivilima.domain.inventory;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

import com.create_vision.sivilima.domain.base.BaseObject;
import com.create_vision.sivilima.domain.user.UserTO;
@Entity
@Table(name = "T_INVOICE")
public class InvoiceTO extends BaseObject  {

    private int invoiceNumber;
    private String customerName;
    private UserTO createUser;
    private Date createdDate;
    private String description;
    private String telephoneNumber;
    private double totalAmount;


}
