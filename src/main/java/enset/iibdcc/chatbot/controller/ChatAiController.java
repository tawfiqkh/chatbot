package enset.iibdcc.chatbot.controller;

import enset.iibdcc.chatbot.service.ChatAIService;
import java.awt.PageAttributes;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ChatAiController.CHAT_AI_ENDPOINT)
public class ChatAiController {
    static final String CHAT_AI_ENDPOINT = "/chat";

    private ChatAIService chatAIService;

    public ChatAiController(ChatAIService chatAIService){
        this.chatAIService = chatAIService;
    }

    @GetMapping(value ="/ask", produces = MediaType.TEXT_PLAIN_VALUE)
    public String ask(@RequestParam("question") String question){
        return chatAIService.ragChat(question);
    }
}

