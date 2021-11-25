package com.example.backend.model.viewModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
public @Data class PostVM {
    public String text;
    public long userId;
    public LocalDateTime date;
}