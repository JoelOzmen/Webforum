package com.example.backend.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name = "post")
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "text", nullable = false)
    private String text;

    @Column(name = "date", nullable = false)
    private LocalDateTime date;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "user", nullable = false)
    private User user;

    @Override
    public String toString() {
        String info = "User: " + getUser().toString() + "\n"  + "Text: " + getText() + "\n"
                + "Date: " + date + "\n";
        return info;
    }

    public Long getId() {
        return id;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public LocalDateTime getDate() {
        return date;
    }
    public void setDate(LocalDateTime date) {
        this.date = date;
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }
}