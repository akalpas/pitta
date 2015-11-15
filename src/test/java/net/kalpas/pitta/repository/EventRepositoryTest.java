package net.kalpas.pitta.repository;

import net.kalpas.pitta.PittaApplication;
import net.kalpas.pitta.domain.Event;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = PittaApplication.class)
@WebAppConfiguration
@IntegrationTest
public class EventRepositoryTest extends AbstractMongoDbTest {

    @Autowired
    private EventRepository repository;

    @Test
    public void mongoTest(){

        repository.deleteAll();

        Event event = new Event();
        event.id = 1l;
        event.name = "name";
        repository.save(event);


        List<Event> found = repository.findByName(event.name);

        assertNotNull(found);
        assertFalse(found.isEmpty());
    }

}
