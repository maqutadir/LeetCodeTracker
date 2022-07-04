package com.leetcodetracker.leetcodetrackerbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leetcodetracker.leetcodetrackerbackend.models.ProblemTracker;
import com.leetcodetracker.leetcodetrackerbackend.rep.ProblemTrackerRepository;

@RestController
@RequestMapping("/problemtracker")
public class LeetCodeTrackerController {

@Autowired
private ProblemTrackerRepository problemTrackerRepository;   

@GetMapping("/sayhello")
 public String sayHello(String name) {
    System.out.println("Hello "+name);
    return name;
 }

 @PostMapping("/")
 public ResponseEntity<?> addProblemTracker(@RequestBody ProblemTracker problemtracker) {
   ProblemTracker save = this.problemTrackerRepository.save(problemtracker);
   return ResponseEntity.ok(save);
 }

 @GetMapping("/")
 public ResponseEntity<?> addProblemTracker() {
   return ResponseEntity.ok(this.problemTrackerRepository.findAll());
 }

 
}
