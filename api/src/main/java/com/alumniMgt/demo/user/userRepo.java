package com.alumniMgt.demo.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface userRepo extends CrudRepository<UserModel,Integer> {

}
