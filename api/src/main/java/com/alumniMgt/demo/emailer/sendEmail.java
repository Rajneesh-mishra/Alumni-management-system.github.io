package com.alumniMgt.demo.emailer;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class sendEmail {

    public static void sendEmail(String to,String text,String subject) throws SQLException, IOException{
    	
  
        String from = "roysurendra520@gmail.com";
        String pass = "Rajneesh@123";

        // Get system properties
        Properties prop = System.getProperties();

        // Setup mail server
    	prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true");

        // Get the Session object.// and pass username and password
        Session session = Session.getInstance(prop, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {

                return new PasswordAuthentication(from,pass);

            }

        });

        session.setDebug(false);
        
        try {
          
            MimeMessage message = new MimeMessage(session);

      
            message.setFrom(new InternetAddress(from));


            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
           // message.addRecipient(Message.RecipientType.CC, new InternetAddress(li.getCc()));


            message.setSubject(subject);

            message.setText(text);


            Transport.send(message);
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }

    }

}