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
    @ManyToOne
    private User user;

    public Income() {
    }

    public Income(String nombre, Double monto, String fecha, String categoria, String descripcion, User user) {
        this.nombre = nombre;
        this.monto = monto;
        this.fecha = fecha;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.user = user;
    }

    public Integer getIdingreso() {
        return idingreso;
    }

    public void setIdingreso(Integer idingreso) {
        this.idingreso = idingreso;
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

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Income{" +
                "idingreso=" + idingreso +
                ", nombre='" + nombre + '\'' +
                ", monto=" + monto +
                ", fecha='" + fecha + '\'' +
                ", categoria='" + categoria + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", user=" + user +
                '}';
    }
}
