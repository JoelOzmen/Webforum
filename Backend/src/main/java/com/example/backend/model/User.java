package com.example.backend.model;

import javax.persistence.*;
import java.util.List;

//DO: Database Object
@Table(name = "user")
@Entity
public class User {
    //Id för användare i databasen
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    //Användarnamn i databasen
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    //Lösenord i databasen
    @Column(name = "password", nullable = false)
    private String password;

    //Posts i databasen, mapped by = namnet från variabeln i classen post, foreign key
    @OneToMany(mappedBy = "user")
    private List<Post> posts;

    //Skickade Messages i databasen
    @OneToMany(mappedBy = "sender")
    private List<Message> messagesSent;

    //Mottagna Messages i databasen
    @OneToMany(mappedBy = "receiver")
    private List<Message> messagesReceived;

    //ToString för att slippa onödig rekursion
    @Override
    public String toString(){
        String info = "UserId: " + id + "\n" + "Username: " + username + "\n";
               /* + "Posts: " + getPosts() + "\n"  + "Sent: " + getMessagesSent()
                + "\n"  + "Received: " + getMessagesReceived() + "\n";*/
        return info;
    }

    //Standard get och set metoder
    public void setPassword(String password) {
        this.password = password;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public Long getId() {
        return id;
    }
    public List<Post> getPosts() {
        return posts;
    }
    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }
    public List<Message> getMessagesSent() {
        return messagesSent;
    }
    public void setMessagesSent(Message messageSent) {
        this.messagesSent.add(messageSent);
    }
    public List<Message> getMessagesReceived() {
        return messagesReceived;
    }
    public void setMessagesReceived(Message messageReceived) {
        this.messagesReceived.add(messageReceived);
    }

    public String getPassword() {
        return password;
    }
}