package com.example.backend.model.viewModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
public @Data class MessageVM {
    public String text;
    public Long senderId;
    public Long receiverId;
    public LocalDateTime date;
}