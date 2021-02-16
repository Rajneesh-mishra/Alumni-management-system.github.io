package com.alumniMgt.demo;

import org.springframework.data.repository.CrudRepository;

public interface userrepo extends CrudRepository<User,Integer> {

	User findById(int id); 
}
