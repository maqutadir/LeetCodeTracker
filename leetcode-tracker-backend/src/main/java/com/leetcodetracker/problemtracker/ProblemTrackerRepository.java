package com.leetcodetracker.problemtracker;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProblemTrackerRepository extends MongoRepository<ProblemTracker, Integer> {
    
}
