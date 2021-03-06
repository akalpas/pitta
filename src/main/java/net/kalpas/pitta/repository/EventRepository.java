package net.kalpas.pitta.repository;

import net.kalpas.pitta.domain.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EventRepository extends MongoRepository<Event, Long> {
    public List<Event> findByName(String name);
}
