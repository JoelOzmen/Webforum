
package com.example.backend;

import com.example.backend.model.Post;
import com.example.backend.model.User;
import com.example.backend.repository.MessageRepository;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.List;

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
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testInsertObject()  throws Exception {
        String url = "http://localhost:8080/api/users/add";
        ///vet inte vad jag gör ens så länge 
    }


//    @Test
//    public void createUser() throws Exception {
//
////        mvc.perform(post("/user?username=Test&password=test123"))
////                .andExpect(status().isOk())
////                .andExpect(jsonPath("token", any(Number.class)));
////
////        mvc.perform(post("/user?username=Test2&password=test123"))
////                .andExpect(status().isOk())
////                .andExpect(jsonPath("token", any(Number.class)));
//    }
//
//    @Test
//    void followers() throws Exception {
////        var popularguy = new User();
////        popularguy.setUsername("popularguy");
////        popularguy = userRepository.save(popularguy);
////
////        var fan1 = new User();
////        fan1.username = "fan";
////        fan1 = userRepository.save(fan1);
////        var token = userTokenRepository.save(new UserToken(fan1));
////
////        var fan2 = userRepository.save(new User("fan2"));
////
////        popularguy.getFollowers().addAll(List.of(fan1, fan2));
////        popularguy = userRepository.save(popularguy);
////
////        var expected = objectMapper.writeValueAsString(List.of(
////                fan1.getView(),
////                fan2.getView()
////        ));
////        mvc.perform(get("/user/" + popularguy.username + "/followers")
////                        .header("Authorization", "Bearer " + token.getId()))
////                .andExpect(status().isOk())
////                .andExpect(content().json(expected));
//
//
//    }
//
//    @Test
//    void feed() throws Exception {
////        var popularguy = userRepository.save(new User("popularguy2"));
////
////        var post1 = postRepository.save(new Post(popularguy, "Hello there"));
////        var post2 = postRepository.save(new Post(popularguy, "Hello again"));
////
////        var fan = userRepository.save(new User("fan3"));
////        var token = userTokenRepository.save(new UserToken(fan));
////
////        popularguy.getFollowers().addAll(List.of(fan));
////        popularguy = userRepository.save(popularguy);
////
////        var expected = objectMapper.writeValueAsString(List.of(
////                post1.getView(),
////                post2.getView()
////        ));
////        mvc.perform(get("/user/feed")
////                        .header("Authorization", "Bearer " + token.getId()))
////                .andExpect(status().isOk())
////                .andExpect(content().json(expected));
//
//
//    }
//
//    @Test
//    void search() throws Exception {
////        var john = userRepository.save(new User("John"));
////        var doe = userRepository.save(new User("Doe"));
////
////        var expected = objectMapper.writeValueAsString(List.of(
////                john.getView(),
////                doe.getView()
////        ));
////        mvc.perform(get("/search/users/o"))
////                .andExpect(status().isOk())
////                .andExpect(content().json(expected));
//
//
//    }
}

