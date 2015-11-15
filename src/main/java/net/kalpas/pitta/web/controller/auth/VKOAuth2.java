package net.kalpas.pitta.web.controller.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class VKOAuth2 {

    public final String authHost = "oauth.vk.com";
    public final String authPath = "/authorize";
    public final String v = "5.40";
    public final String display = "page";
    public final String scope = "groups";
    public final String clientId="5149599";

    @Value("${vk.api.secret}")
    public String apiSecret;

    @Value("${vk.api.redirect}")
    public String redirectUri;

}
