package com.leetcodetracker.leetcodetrackerbackend.rep;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.leetcodetracker.leetcodetrackerbackend.models.ProblemTracker;

public interface ProblemTrackerRepository extends MongoRepository<ProblemTracker, Integer> {
    
}
