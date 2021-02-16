package com.alumniMgt.demo.controllers;



import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alumniMgt.demo.login.Login;
import com.alumniMgt.demo.login.LoginRepository;

@Controller 
public class MainController {
	@Autowired
    LoginRepository loginrepository;
	
	@RequestMapping(value="/login")
	public @ResponseBody Login welcome(HttpServletRequest req)
	{
		List<Login> allUser;
		System.out.println(req.getParameter("username")+" "+ req.getParameter("password"));
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		allUser = loginrepository.findAll();
		
		if(username != null && password != null)
		for(int i = 0;i < allUser.size();i++)
		{
			if(username.equals(allUser.get(i).getEmail()) && password.equals(allUser.get(i).getPassword()))
			{
				return allUser.get(i);
			}
		}
		return null;
	}
	@RequestMapping(value="/registration")
	public ModelAndView registerNewUser(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("reg");
		return mv;
	}
	@RequestMapping(value="/logout")
	public ModelAndView logout(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("login_page");
		return mv;
	}

}
