package net.kalpas.pitta.web.controller.auth;

import net.kalpas.pitta.PittaApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.*;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = PittaApplication.class)
@WebAppConfiguration
public class VKAuthControllerTest {

    @Autowired
    private VKOAuth2 credentials;

    @Test
    public void credTest(){
        assertNotNull(credentials.apiSecret);
    }
}
