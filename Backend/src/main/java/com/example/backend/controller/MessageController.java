package com.example.backend.controller;
import com.example.backend.model.Message;

import com.example.backend.model.Message;
import com.example.backend.model.viewModel.MessageVM;
import com.example.backend.service.MessageService;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping(path = "/api/message")
public class MessageController {

    final UserService userService;
    final MessageService messageService;
    public MessageController(UserService userService, MessageService messageService) {
        this.userService = userService;
        this.messageService = messageService;
    }

    //http://localhost:8090/api/message/send
    @PostMapping(path = "/send")
    public ResponseEntity createMessage(@RequestBody MessageVM message) {
        Message ms = messageService.addMessage(message.text, message.senderId, message.receiverId, LocalDateTime.now());
        var vm = new MessageVM(ms.getText(), ms.getSender().getId(), ms.getReceiver().getId(), LocalDateTime.now());
        if (ms == null) {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        else {
            return ResponseEntity.status(HttpStatus.OK).body(vm);
        }
    }

}