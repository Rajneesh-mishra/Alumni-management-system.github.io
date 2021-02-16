package com.alumniMgt.demo.controllers;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.alumniMgt.demo.emailer.sendEmail;
import com.alumniMgt.demo.job.Job;
import com.alumniMgt.demo.job.JobRepository;
import com.alumniMgt.demo.login.Login;
import com.alumniMgt.demo.login.LoginRepository;
import com.alumniMgt.demo.story.StoryModel;
import com.alumniMgt.demo.story.storyRepo;
import com.alumniMgt.demo.user.UserModel;
import com.alumniMgt.demo.user.userRepo;

@Controller
public class dataController {
	
	@Autowired
	userRepo usrRepo;
	@Autowired
    LoginRepository loginrepository;
	@Autowired
    storyRepo stryRepo;
	
	
	@Autowired
    JobRepository jobRepo;
	
	@RequestMapping(value="/saveuser")
	public @ResponseBody UserModel registerNewUser( UserModel usr) throws SQLException, IOException
	{
		UserModel user = usrRepo.save(usr);
		Random rand = new Random(); 
		Integer pass = rand.nextInt();
		String password = pass.toString().substring(1,6);
      
		Login lg = new Login();
		lg.setId(0);
		lg.setRole(user.getAcctype());
		lg.setUser(user.getFname()+" "+user.getLname());
		lg.setEmail(user.getEmail());
		lg.setPassword(password);
		loginrepository.save(lg);
		sendEmail.sendEmail(user.getEmail(),password,"Welcome to alumni management");
		
		return user;
	}
	@PostMapping("/uploadStory")
	    public  @ResponseBody String uplaodStory(StoryModel stryModel) {
		   stryRepo.save(stryModel);
	        return "story saved";
	    }
	
	@GetMapping("/forgetPassword/{email}")
    public  @ResponseBody String forgetPassword(@PathVariable String email) throws SQLException, IOException {
		Login login = loginrepository.findByEmail(email).get(0);
		Random rand = new Random(); 
		Integer pass = rand.nextInt();
		String password = pass.toString().substring(1,6);
		login.setPassword(password);
		login = loginrepository.save(login);
		  String body="Hello "+login.getUser()+"\n\r\nNo need to worry, we have sent you a password :\r\n"+"New password: is:"+ login.getPassword()+ "\r\nIf you didn\'t request a password reset,"+
					" feel free to delete this email and carry on enjoying your Alumni Group!\r\nAll the best,\r\nThe FGIPS Team";
		sendEmail.sendEmail(login.getEmail(),body,"Hello again "+login.getUser()+",Here is Your New Password" );
        return "password changed";
    }
	
	@PostMapping("/uploadJob")
    public  @ResponseBody String uplaodJob(Job jobModel) {
		jobRepo.save(jobModel);
        return "job saved";
    }
	
	@GetMapping("/getJobs")
    public  @ResponseBody Iterable<Job> getJobs() {
    
        return  jobRepo.findAll();
    } 
	
	@GetMapping("/getStories")
    public  @ResponseBody List<StoryModel> getStories() {
        return  stryRepo.findAll();
    }
	  
}
