package com.alumniMgt.demo.event;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface EventRepo extends CrudRepository<Event, Integer>
{
	@Query("select e from Event e order by event_id desc")
	public List<Event> getAllEvents();
}
