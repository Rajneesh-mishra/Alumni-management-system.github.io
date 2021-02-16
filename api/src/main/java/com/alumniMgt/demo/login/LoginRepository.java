package com.alumniMgt.demo.login;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface LoginRepository extends CrudRepository<Login,Integer> {

	List<Login> findAll();
	List<Login> findByEmail(String email);
}
