package net.kalpas.pitta.web.controller.auth;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AuthResponse {

    @JsonProperty("access_token")
    public String accessToken;

    @JsonProperty("expires_in")
    public String expiresIn;

    @JsonProperty("user_id")
    public Long userId;
}
