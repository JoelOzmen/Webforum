package com.example.backend.model;

import javax.persistence.*;
import java.sql.Date;

@Table(name = "message")
@Entity
public class Message {
    @Column(name = "text", nullable = false)
    private String text;

    @Column(name = "date", nullable = false)
    private Date date;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @ManyToOne
    private User user;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}