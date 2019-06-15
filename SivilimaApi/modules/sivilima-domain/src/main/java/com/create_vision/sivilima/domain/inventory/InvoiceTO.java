package com.create_vision.sivilima.domain.inventory;
import java.util.*;

import javax.persistence.*;

import com.create_vision.sivilima.domain.base.BaseObject;
import com.create_vision.sivilima.domain.user.UserTO;
import com.create_vision.sivilima.domain.inventory.InvoiceItemTO;
import org.hibernate.annotations.Fetch;

@Entity
@Table(name = "T_INVOICE")
public class InvoiceTO {

    private static final long serialVersionUID = -4317156599545065569L;
    private int invoiceNumber;
    private String customerName;
    private UserTO createUser;
    private Date createdDate;
    private String description;
    private String telephoneNumber;
    private double totalAmount;
    private Set<InvoiceItemTO> invoiceItemTO;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name = "INVOICE_NUMBER")
    public int getInvoiceNumber() {return invoiceNumber; }
    public void setInvoiceNumber(int invoiceNumber) { this.invoiceNumber = invoiceNumber;}

    @Column(name = "CUSTOMER_NAME", length = 200)
    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USER")
    public UserTO getCreateUser() { return createUser; }
    public void setCreateUser(UserTO createUser) { this.createUser = createUser; }

    @Column(name = "CREATED_DATE")
    @Temporal(TemporalType.DATE)
    public Date getCreatedDate() { return createdDate; }
    public void setCreatedDate(Date createdDate) { this.createdDate = createdDate;}

    @Column(name = "DESCRIPTION")
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    @Column(name = "TELEPHONE_NUMBER",length = 12)
    public String getTelephoneNumber() { return telephoneNumber; }
    public void setTelephoneNumber(String telephoneNumber) { this.telephoneNumber = telephoneNumber; }

    @Column(name = "TOTAL_AMOUNT")
    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "invoiceTO")
    public Set<InvoiceItemTO> getInvoiceItemTO() { return invoiceItemTO;}
    public void setInvoiceItemTO(Set<InvoiceItemTO> invoiceItemTO) { this.invoiceItemTO = invoiceItemTO; }
}
