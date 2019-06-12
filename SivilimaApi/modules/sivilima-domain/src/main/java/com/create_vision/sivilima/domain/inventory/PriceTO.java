package com.create_vision.sivilima.domain.inventory;

import com.create_vision.sivilima.domain.base.BaseObject;
import com.create_vision.sivilima.domain.inventory.ItemTO;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "T_PRICE")
public class PriceTO extends BaseObject {
   // private ItemTO itemTO;
    private double price;
    private double quantity;
    private ItemTO itemTO;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_ITEM_NUMBER")
    public ItemTO getItemTO() { return itemTO; }
    public void setItemTO(ItemTO itemTO) { this.itemTO = itemTO; }

    @Column(name = "PRICE")
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    @Column(name = "QUANTITY")
    public double getQuantity() { return quantity; }
    public void setQuantity(double quantity) { this.quantity = quantity; }
}
