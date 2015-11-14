package net.kalpas.pitta.config;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.jetty.JettyEmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.jetty.JettyServerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig implements EmbeddedServletContainerCustomizer {

    private final Logger log = LoggerFactory.getLogger(AppConfig.class);

    @Value("${domain}")
    private String domain;

    @Bean
    public JettyServerCustomizer jettyServerCustomizer() {
        return (Server server) -> {
            WebAppContext context = (WebAppContext) server.getHandler();
            context.setVirtualHosts(new String[]{domain, "localhost"});
        };
    }

    public void customizeJetty(JettyEmbeddedServletContainerFactory containerFactory) {
        containerFactory.addServerCustomizers(jettyServerCustomizer());
    }

    @Override
    public void customize(ConfigurableEmbeddedServletContainer container) {
        if (container instanceof JettyEmbeddedServletContainerFactory) {
            customizeJetty((JettyEmbeddedServletContainerFactory) container);
        }
    }
}
