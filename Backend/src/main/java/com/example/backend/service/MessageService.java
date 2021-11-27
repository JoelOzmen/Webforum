package com.example.backend.service;

import com.example.backend.model.Message;
import com.example.backend.repository.MessageRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {

    final UserRepository userRepository;
    final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    public Message addMessage(String text, Long senderId, Long receiverId, LocalDateTime date) {
        Message ms = new Message();
        ms.setText(text);
        ms.setSender(userRepository.findUserById(senderId));
        ms.setReceiver(userRepository.findUserById(receiverId));
        ms.setDate(date);
        return messageRepository.save(ms);
    }

    public List<Message> getMessagesBySenderId(long id) {
        var messages = messageRepository.findAllBySenderId(id);
        return messages;
    }

    public List<Message> getMessagesByReceiverId(long id) {
        var messages = messageRepository.findAllByReceiverId(id);
        return messages;
    }
}