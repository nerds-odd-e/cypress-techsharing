package com.odde.demo.techsharing;

import com.odde.demo.techsharing.model.Event;
import com.odde.demo.techsharing.model.Group;
import com.odde.demo.techsharing.model.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Huawei Dongguan TechSharing",
                "Huawei Shanghai TechSharing",
                "Huawei Shenzhen TechSharing").forEach(name ->
                repository.save(new Group(name))
        );

        Group techshare = repository.findByName("Huawei Shenzhen TechSharing");
        Event e = Event.builder().title("Full Stack Reactive")
                .description("Reactive with Spring Boot + React")
                .date(Instant.parse("2020-12-12T15:00:00.000Z"))
                .build();
        techshare.setEvents(Collections.singleton(e));
        repository.save(techshare);

        repository.findAll().forEach(System.out::println);
    }
}
