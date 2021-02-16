package com.alumniMgt.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alumniMgt.demo.event.Event;
import com.alumniMgt.demo.event.EventRepo;
import com.alumniMgt.demo.story.StoryModel;

@Controller
public class EventController {

	@Autowired
	EventRepo eventRepo;
	
	@PostMapping("/uploadEvent")
    public  @ResponseBody String uplaodImage(Event event) {
		eventRepo.save(event);
        return "event saved";
    }

@GetMapping("/getEvents")
public  @ResponseBody Iterable<Event> getEvents() {

    return  eventRepo.getAllEvents();
}
}
