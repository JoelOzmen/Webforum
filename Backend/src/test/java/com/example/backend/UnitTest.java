
package com.example.backend;

import com.example.backend.controller.UserController;
import com.example.backend.model.Post;
import com.example.backend.model.User;
import com.example.backend.repository.MessageRepository;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatcher;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;












import static org.hamcrest.Matchers.any;
import static org.springframework.test.util.AssertionErrors.assertNotNull;
import static org.springframework.test.util.AssertionErrors.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(UserController.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class UnitTest {

    @Autowired
    MessageRepository MessageRepository;
    @Autowired
    PostRepository PostRepository;
    @Autowired
    UserRepository UserRepository;
    @Autowired
    private MockMvc mockMvc;
//    @Autowired
//    private ObjectMapper objectMapper;

    @MockBean
    private UserService userService;
    private static ObjectMapper mapper = new ObjectMapper();


    @Test
    public void testPostUser() throws Exception
    {

        String url = "http://localhost:8080/api/users/add";

        User user = new User();
        user.setUsername("username");
        user.setPassword("password");
        Mockito.when(userService.addUser(user.getUsername(),user.getPassword())).thenReturn(user);
        String json = mapper.writeValueAsString(user);
        mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
                .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isCreated())
                .andExpect(jsonPath("$.username", Matchers.equalTo("username")))
                .andExpect(jsonPath("$.password",Matchers.equalTo("password")));
    }





}

