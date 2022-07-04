package com.leetcodetracker.leetcodetrackerbackend.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

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
    
    public ProblemTracker(int problemNumber, String problemDesc, String dataStructure1, String dataStructure2,
            String dataStructure3, String timeComplexity, String spaceComplexity, String algorithm1, String algorithm2,
            String concept1, String concept2, String concept3, String notes, Date firstAttempted,
            boolean firstAttemptSolve, Date lastAttempted, boolean lastAttemptSolve, int lastTimeTaken,
            int timesSolved) {
        this.problemNumber = problemNumber;
        this.problemDesc = problemDesc;
        this.dataStructure1 = dataStructure1;
        this.dataStructure2 = dataStructure2;
        this.dataStructure3 = dataStructure3;
        this.timeComplexity = timeComplexity;
        this.spaceComplexity = spaceComplexity;
        this.algorithm1 = algorithm1;
        this.algorithm2 = algorithm2;
        this.concept1 = concept1;
        this.concept2 = concept2;
        this.concept3 = concept3;
        this.notes = notes;
        this.firstAttempted = firstAttempted;
        this.firstAttemptSolve = firstAttemptSolve;
        this.lastAttempted = lastAttempted;
        this.lastAttemptSolve = lastAttemptSolve;
        this.lastTimeTaken = lastTimeTaken;
        this.timesSolved = timesSolved;
    }

    public int getProblemNumber() {
        return problemNumber;
    }

    public String getProblemDesc() {
        return problemDesc;
    }

    public void setProblemNumber(int problemNumber) {
        this.problemNumber = problemNumber;
    }

    public void setProblemDesc(String problemDesc) {
        this.problemDesc = problemDesc;
    }

    public void setDataStructure1(String dataStructure1) {
        this.dataStructure1 = dataStructure1;
    }

    public void setDataStructure2(String dataStructure2) {
        this.dataStructure2 = dataStructure2;
    }

    public void setDataStructure3(String dataStructure3) {
        this.dataStructure3 = dataStructure3;
    }

    public void setTimeComplexity(String timeComplexity) {
        this.timeComplexity = timeComplexity;
    }

    public void setSpaceComplexity(String spaceComplexity) {
        this.spaceComplexity = spaceComplexity;
    }

    public void setAlgorithm1(String algorithm1) {
        this.algorithm1 = algorithm1;
    }

    public void setAlgorithm2(String algorithm2) {
        this.algorithm2 = algorithm2;
    }

    public void setConcept1(String concept1) {
        this.concept1 = concept1;
    }

    public void setConcept2(String concept2) {
        this.concept2 = concept2;
    }

    public void setConcept3(String concept3) {
        this.concept3 = concept3;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public void setFirstAttempted(Date firstAttempted) {
        this.firstAttempted = firstAttempted;
    }

    public void setFirstAttemptSolve(boolean firstAttemptSolve) {
        this.firstAttemptSolve = firstAttemptSolve;
    }

    public void setLastAttempted(Date lastAttempted) {
        this.lastAttempted = lastAttempted;
    }

    public void setLastAttemptSolve(boolean lastAttemptSolve) {
        this.lastAttemptSolve = lastAttemptSolve;
    }

    public void setLastTimeTaken(int lastTimeTaken) {
        this.lastTimeTaken = lastTimeTaken;
    }

    public void setTimesSolved(int timesSolved) {
        this.timesSolved = timesSolved;
    }

    public String getDataStructure1() {
        return dataStructure1;
    }

    public String getDataStructure2() {
        return dataStructure2;
    }

    public String getDataStructure3() {
        return dataStructure3;
    }

    public String getTimeComplexity() {
        return timeComplexity;
    }

    public String getSpaceComplexity() {
        return spaceComplexity;
    }

    public String getAlgorithm1() {
        return algorithm1;
    }

    public String getAlgorithm2() {
        return algorithm2;
    }

    public String getConcept1() {
        return concept1;
    }

    public String getConcept2() {
        return concept2;
    }

    public String getConcept3() {
        return concept3;
    }

    public String getNotes() {
        return notes;
    }

    public Date getFirstAttempted() {
        return firstAttempted;
    }

    public boolean isFirstAttemptSolve() {
        return firstAttemptSolve;
    }

    public Date getLastAttempted() {
        return lastAttempted;
    }

    public boolean isLastAttemptSolve() {
        return lastAttemptSolve;
    }

    public int getLastTimeTaken() {
        return lastTimeTaken;
    }

    public int getTimesSolved() {
        return timesSolved;
    }

    

}
