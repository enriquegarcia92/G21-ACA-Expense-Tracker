package com.g21.expensetracker.models;

import javax.persistence.*;

@Entity
@Table(name = "ingreso")
public class Income {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "idingreso")
    private Integer idingreso;
    @Column(nullable=false, length = 150, name = "nombre")
    private String nombre;
    @Column(nullable=false, name = "monto")
    private Double monto;
    @Column(nullable=false, length = 10, name = "fechaingreso")
    private String fecha;
    @Column(nullable=false, length = 100, name = "categoria")
    private String categoria;
    @Column(nullable=false, length = 255, name = "descripcion")
    private String descripcion;
    public Income() {
    }

    public Income(String nombre, Double monto, String fecha, String categoria, String descripcion) {
        this.nombre = nombre;
        this.monto = monto;
        this.fecha = fecha;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }

    public Integer getIdingreso() {
        return idingreso;
    }

    public String getNombre() {
        return nombre;
    }

    public Double getMonto() {
        return monto;
    }

    public String getFecha() {
        return fecha;
    }

    public String getCategoria() {
        return categoria;
    }

    public String getDescripción() {
        return descripcion;
    }

    public void setIdingreso(Integer idingreso) {
        this.idingreso = idingreso;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public void setDescripción(String descripción) {
        this.descripcion = descripción;
    }
}
