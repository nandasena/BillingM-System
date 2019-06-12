package com.create_vision.sivilima.domain.inventory;

import com.create_vision.sivilima.domain.base.BaseObject;
import com.create_vision.sivilima.domain.inventory.PriceTO;
import com.create_vision.sivilima.domain.inventory.InvoiceItemTO;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "T_ITEM")
public class ItemTO  {

    private String itemNumber;
    private int quantity;
    private Set<InvoiceItemTO> InvoiceItemTO;
    private Set<PriceTO> priceTO;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name = "ITEM_NUMBER")
    public String getItemNumber() { return itemNumber; }
    public void setItemNumber(String itemNumber) { this.itemNumber = itemNumber; }

    @Column(name = "QUANTITY")
    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "itemTO")
    public Set<InvoiceItemTO> getInvoiceItemTO() { return InvoiceItemTO; }
    public void setInvoiceItemTO(Set<InvoiceItemTO> invoiceItemTO) { InvoiceItemTO = invoiceItemTO; }

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "itemTO")
    public Set<PriceTO> getPriceTO() { return priceTO; }
    public void setPriceTO(Set<PriceTO> priceTO) { this.priceTO = priceTO; }
}
