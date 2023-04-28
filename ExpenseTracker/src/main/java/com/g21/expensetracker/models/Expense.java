package com.g21.expensetracker.models;

import javax.persistence.*;

@Entity
@Table(name = "gasto")
public class Expense {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "idgasto")
    private Integer idgasto;
    @Column(nullable=false, length = 150, name = "nombre")
    private String nombre;
    @Column(nullable=false, name = "monto")
    private Double monto;
    @Column(nullable=false, length = 10, name = "fechaingreso")
    private String fecha;
    @Column(nullable=false, length = 100, name = "categoria")
    private String categoria;
    @Column(nullable=false, name = "descripcion")
    private String descripcion;

    public Expense() {
    }

    public Expense(String nombre, Double monto, String fecha, String categoria, String descripcion) {
        this.nombre = nombre;
        this.monto = monto;
        this.fecha = fecha;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }

    public Integer getIdgasto() {
        return idgasto;
    }

    public void setIdgasto(Integer idgasto) {
        this.idgasto = idgasto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripción) {
        this.descripcion = descripción;
    }
}
