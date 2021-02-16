package com.alumniMgt.demo.story;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
public interface storyRepo extends JpaRepository<StoryModel, Long> {

	@Query("select i from StoryModel i order by i.id desc")
	public List<StoryModel> findAll(); 
}