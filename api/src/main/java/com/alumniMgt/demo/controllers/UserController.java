package com.alumniMgt.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alumniMgt.demo.story.StoryModel;
import com.alumniMgt.demo.user.UserModel;
import com.alumniMgt.demo.user.userRepo;

@Controller
public class UserController {

	@Autowired
	userRepo usrRepo;
	
	@GetMapping("/getUsers")
    public  @ResponseBody Iterable<UserModel> getStories() {
    
        return  usrRepo.findAll();
    }
}
