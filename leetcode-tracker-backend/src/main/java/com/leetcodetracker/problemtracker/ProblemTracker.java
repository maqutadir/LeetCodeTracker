package com.leetcodetracker.problemtracker;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "ProblemTracker")
public class ProblemTracker {
    private int problemNumber;
    private String problemDesc;

    private String dataStructure1;
    private String dataStructure2;
    private String dataStructure3;
    
    private String timeComplexity;
    private String spaceComplexity;

    private String algorithm1;
    private String algorithm2;

    private String concept1;
    private String concept2;
    private String concept3;

    private String notes;

    private Date firstAttempted;
    private boolean firstAttemptSolve;
    private Date lastAttempted;
    private boolean lastAttemptSolve;
    private int lastTimeTaken;
    private int timesSolved;
        

}
