package com.example.backend.service;

import com.example.backend.model.Message;
import com.example.backend.model.User;
import com.example.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository)
    {
        this.messageRepository = messageRepository;
    }

    public Message addMessage(Message message)
    {
        //var message = messageRepository.findById();
        //var message = messageRepository.findById(userSendTo.getId());
        return messageRepository.save(message);
    }

}
