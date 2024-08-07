package lk.esoft.ai;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.url}")
    private String apiUrl;

    @Value("${gemini.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    private final Map<String, String> predefinedCommands;

    public GeminiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.predefinedCommands = new HashMap<>();
        loadPredefinedCommands();
    }

    private void loadPredefinedCommands() {
        predefinedCommands.put("who developed you", "My Creator is **<a class='text-white' href='https://github.com/eamalindu'>Malindu Prabodhitha</a>**");
        predefinedCommands.put("who created you", "My Creator is **<a class='text-white' href='https://github.com/eamalindu'>Malindu Prabodhitha</a>**");
        predefinedCommands.put("esoft", "With roots going back to the year 2000, ESOFT has grown to be the largest private sector higher education network in Sri Lanka due to an extensive island-wide network of 40 branches which create opportunities for over 30,000 students each year. Initially starting with Computing, ESOFT today is a diversified education provider in the fields of ICT & Computing, Business Management, Hospitality Management, Engineering, Personal & Professional Development, Language Training and Corporate Training.<br><img src='logoOriginal.jpg' class='mx-auto d-block' width='150px'>");
        predefinedCommands.put("ESOFT", "With roots going back to the year 2000, ESOFT has grown to be the largest private sector higher education network in Sri Lanka due to an extensive island-wide network of 40 branches which create opportunities for over 30,000 students each year. Initially starting with Computing, ESOFT today is a diversified education provider in the fields of ICT & Computing, Business Management, Hospitality Management, Engineering, Personal & Professional Development, Language Training and Corporate Training.<br><img src='logoOriginal.jpg' class='mx-auto d-block' width='150px'>");
        predefinedCommands.put("ESOFT Nittambuwa", "");
        predefinedCommands.put("/Pubudushani", "Ruwanthika **Pubudushani** is a lecturer of our branch");
        predefinedCommands.put("/Shutdown", "Commencing shutdown procedure..<br>5... 4... 3... 2... 1...<br>System Offline<audio autoplay><source src='shutdown.mp3' type='audio/mpeg'></audio>");
        predefinedCommands.put("/StartUp", "Hello! Welcome to ESOFT Metro College Nittambuwa. I am **ESOFT AI Assistant**.<br/><br/>I am here to help you. How can I help you?");
        predefinedCommands.put("Tell me about yourself", "I am a large language model, trained by **Malindu Prabodhitha**. <br/><br/>Here are some key aspects of my capabilities:<br/><ul>" +
                "<li>I am trained on a massive dataset of text and code. This allows me to" +
                "   generate text, translate languages, write different kinds of creative" +
                "   content, and answer your questions in an informative way.</li>" +
                "<li>I am still under development. I am constantly learning and improving" +
                "   my abilities.</li>" +
                "<li>I am not a person. I am a computer program and do not have feelings," +
                "   beliefs, or consciousness.</li>" +
                "<li>I am designed to be helpful and informative. I aim to provide" +
                "   accurate and relevant information to the best of my ability.</li>" +
                "<li>I can access and process information from the real world through" +
                "   Google Search. This allows me to stay up-to-date and provide relevant" +
                "   information.</li>" +
                "<li>I am a powerful tool for communication and learning. I can be used" +
                "   for a wide range of tasks, from writing emails to generating creative" +
                "   content.</li></ul>");
    }

    public String getGeminiData(String query) {
        if (predefinedCommands.containsKey(query)) {
            // Return in the expected structure
            return "{\"candidates\":[{\"content\":{\"parts\":[{\"text\":\"" + predefinedCommands.get(query) + "\"}]}}]}";
        }

        // Create headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Create the request body
        String requestBody = String.format("{\"contents\":[{\"parts\":[{\"text\":\"%s\"}]}]}", query);

        // Create the HTTP entity
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        // Build the URL with the API key as a query parameter
        String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("key", apiKey)
                .toUriString();

        // Make the POST request
        return restTemplate.exchange(url, HttpMethod.POST, entity, String.class).getBody();
    }
}
