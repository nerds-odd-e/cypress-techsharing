package com.odde.demo.techsharing;

import com.odde.demo.techsharing.model.Event;
import com.odde.demo.techsharing.model.Group;
import com.odde.demo.techsharing.model.GroupRepository;
import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
class Initializer implements CommandLineRunner {

  private final GroupRepository repository;

  public Initializer(GroupRepository repository) {
    this.repository = repository;
  }

  @Override
  public void run(String... strings) {
    Stream
        .of("Dongguan Tech Community", "Shanghai Tech Community",
            "Shenzhen Tech Community")
        .forEach(name -> repository.save(new Group(name)));

    Group techshare1 = repository.findByName("Dongguan Tech Community");
    Event e1 = Event.builder()
                   .title("Full Stack Reactive")
                   .description("Reactive with Spring Boot + Svelte")
                   .date(Instant.parse("2021-07-12T15:00:00.000Z"))
                   .build();
    techshare1.setEvents(Collections.singleton(e1));
    repository.save(techshare1);

    Group techshare2 = repository.findByName("Shenzhen Tech Community");
    Event e2 = Event.builder()
                   .title("Visual Testing with Percy")
                   .description("Visual Testing with Cypress + Percy")
                   .date(Instant.parse("2021-09-15T17:30:00.000Z"))
                   .build();
    techshare2.setEvents(Collections.singleton(e2));
    repository.save(techshare2);

    repository.findAll().forEach(System.out::println);
  }
}
