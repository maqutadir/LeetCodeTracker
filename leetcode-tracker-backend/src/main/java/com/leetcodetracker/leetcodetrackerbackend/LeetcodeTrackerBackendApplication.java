package com.leetcodetracker.leetcodetrackerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude =  {DataSourceAutoConfiguration.class })
public class LeetcodeTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeetcodeTrackerBackendApplication.class, args);
	}

}
