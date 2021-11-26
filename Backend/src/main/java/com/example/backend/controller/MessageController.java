package com.example.backend.controller;
import com.example.backend.model.Message;
import com.example.backend.service.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "/api/users/message")
public class MessageController {

    final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    //vet inte vad jag gör
    @PostMapping(path="/add")
    public ResponseEntity<Message> createMessage(@RequestBody Message message)
    {
        Message newMessage = messageService.addMessage(message);


        return new ResponseEntity( HttpStatus.OK);
    }

}




