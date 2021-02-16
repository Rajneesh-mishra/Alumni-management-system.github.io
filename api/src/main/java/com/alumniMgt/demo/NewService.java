package com.alumniMgt.demo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class NewService {
	@Autowired
	private userrepo u;
	public String exportReport(HttpServletResponse res) throws JRException, IOException
	{
		List<User> user = (List<User>) u.findAll();
		 res.setContentType("application/x-download");
		  res.setHeader("Content-Disposition", String.format("attachment; filename=\"user.pdf\""));
		File file = ResourceUtils.getFile("classpath:report1.jrxml");
		 OutputStream out = res.getOutputStream();
		JasperReport js = JasperCompileManager.compileReport(file.getAbsolutePath());
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(user,false);
		Map<String,Object> pm = new HashMap<>(); 
		pm.put("created by me ", "amar");
		JasperPrint jp = JasperFillManager.fillReport(js,pm,ds);
		JasperExportManager.exportReportToPdfStream(jp,out);
		return "report generated";
	}

}
