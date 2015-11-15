package net.kalpas.pitta.web.controller.auth;

import com.google.common.base.Joiner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

@Controller
public class VKAuthController {

    @Autowired
    private VKOAuth2 vkoAuth2;


    @RequestMapping("/auth")
    private String authorize() throws Exception {
        String request = "https://oauth.vk.com/authorize";

        HashMap<String, String> params = new HashMap<String, String>();
        params.put("client_id", vkoAuth2.clientId);
        params.put("redirect_uri", vkoAuth2.redirectUri);
        params.put("display", vkoAuth2.display);
        params.put("scope", vkoAuth2.scope);
        params.put("response_type", "code");
        params.put("v", vkoAuth2.v);

        request += "?" + Joiner.on("&").withKeyValueSeparator("=").join(params);
        return "redirect:" + request;
    }

    @RequestMapping("/verify")
    public String verify(@RequestParam("code") String code,
                         @RequestParam(value = "error", required = false) String error,
                         @RequestParam(value = "error_description", required = false) String errorDescription) {


        HashMap<String, String> params = new HashMap<>();
        params.put("code", code);
        params.put("client_secret", vkoAuth2.apiSecret);
        params.put("client_id", vkoAuth2.clientId);
        params.put("redirect_uri", vkoAuth2.redirectUri);

        RestTemplate auth = new RestTemplate();
        AuthResponse response = auth.getForObject(
            "https://oauth.vk.com/access_token?" + Joiner.on("&").withKeyValueSeparator("=").join(params),
            AuthResponse.class);


        return "redirect:/";//TODO temp
    }


}
