package com.create_vision.sivilima.domain.inventory;

import com.create_vision.sivilima.domain.base.BaseObject;
import com.create_vision.sivilima.domain.inventory.InvoiceTO;
import com.create_vision.sivilima.domain.inventory.ItemTO;

import javax.persistence.*;


@Entity
@Table(name = "T_INVOICE_ITEM")
public class InvoiceItemTO extends BaseObject {

    private InvoiceTO invoiceTO;
    private ItemTO itemTO;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "FK_INVOICE_NUMBER", nullable = false)
    public InvoiceTO getInvoiceTO() { return invoiceTO; }
    public void setInvoiceTO(InvoiceTO invoiceTO) { this.invoiceTO = invoiceTO; }


    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "FK_ITEM", nullable = false)
    public ItemTO getItemTO() { return itemTO; }
    public void setItemTO(ItemTO itemTO) { this.itemTO = itemTO; }
}
