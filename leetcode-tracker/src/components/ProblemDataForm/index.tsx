import React, {ChangeEvent, FunctionComponent, useState} from "react";
import internal from "stream";
import { BooleanLiteral, isConstructorDeclaration } from "typescript";
import * as S from './style'
import { postAProblem } from '../../api/services/ProblemsService'

interface problemData {
    problemNumber: number;
    problemDesc: string;

    dataStructure1: string;
    dataStructure2: string;
    dataStructure3: string;
    
    timeComplexity: string;
    spaceComplexity: string;

    algorithm1: string;
    algorithm2: string;

    concept1: string;
    concept2: string;
    concept3: string;

    notes: string;

    firstAttempted: Date;
    firstAttemptSolve: string;
    lastAttempted: Date;
    lastAttemptSolve: any;
    lastTimeTaken: number;
    timesSolved: number;
}

const ProblemDataForm:FunctionComponent = () => {
    const [problemState, setProblemState] = useState<problemData>({problemNumber: 0, problemDesc: '', dataStructure1: '',dataStructure2: '' ,dataStructure3: '' ,timeComplexity: '' ,spaceComplexity: '',algorithm1: '' , algorithm2: '',concept1: '' ,concept2: '',concept3: '', notes: '',
    firstAttempted: new Date(Date.now()), firstAttemptSolve: 'false', lastAttempted: new Date(Date.now()), lastAttemptSolve: false, lastTimeTaken: 0, timesSolved: 0})

    const handleChange = (e: any) => {
        console.log("Event is", e.target.value)
        const updatedState = (prev: any) => {
            return {...prev, [e.target.id]: e.target.value}
        }
        setProblemState(updatedState(problemState))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log('Data is', problemState)
        postAProblem(problemState)
    }

    console.log('Problem state is', problemState)

    return <> <S.FormTitle onSubmit={handleSubmit}>Leetcode Problem Tracker Form</S.FormTitle>
    <S.FormContainer>
        <S.SectionContainer>
            <S.Section>
                    <S.SectionTitle>Problem Desc</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                            <S.Label>Problem No.</S.Label>
                            <S.ShortInput id='problemNumber' type='number' onChange={handleChange} min="1" max="5"></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.Label>Problem Description</S.Label>
                            <S.ShortInput id='problemDesc' value={problemState.problemDesc} onChange={handleChange} ></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Data Structures Used</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                        <S.Label>Data Structure 1</S.Label>
                        <S.ShortInput id='dataStructure1' value={problemState.dataStructure1} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>Data Structure 2</S.Label>
                        <S.ShortInput id='dataStructure2' value={problemState.dataStructure2} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>Data Structure 3</S.Label>
                        <S.ShortInput id='dataStructure3' value={problemState.dataStructure3} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Optimal Big Os</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                            <S.Label>Time Complexity</S.Label>
                            <S.ShortInput id='timeComplexity' value={problemState.timeComplexity} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.Label>Space Complexity</S.Label>
                            <S.ShortInput id='spaceComplexity' value={problemState.spaceComplexity} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Algorithms Used</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                            <S.Label>Algorithm 1</S.Label>
                            <S.ShortInput id='algorithm1' value={problemState.algorithm1} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.Label>Algorithm 2</S.Label>
                            <S.ShortInput id='algorithm2' value={problemState.algorithm2} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Concepts Used</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                        <S.Label>Concept 1</S.Label>
                        <S.ShortInput id='concept1' value={problemState.concept1} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>Concept 2</S.Label>
                        <S.ShortInput id='concept2' value={problemState.concept2} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>Concept 3</S.Label>
                        <S.ShortInput id='concept3' value={problemState.concept3} onChange={handleChange}></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Notes</S.SectionTitle>
                    <S.InputGroup><S.Notes id='notes' value={problemState.notes} onChange={handleChange}/></S.InputGroup>
                </S.Section>
        </S.SectionContainer>
        <S.TimeLineContainer>
            <S.SectionTitle>TimeLine</S.SectionTitle>
            <S.TimeLineAttributesContainer>
                <S.InputGroup>
                <S.Label>First Attempted</S.Label>
                <S.ShortInput id='firstAttempted' type='date' onChange={handleChange}></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>First Attempt Solve</S.Label>
                <S.ShortInput id='firstAttemptSolve' type='checkbox' value={problemState.firstAttemptSolve === 'false' ? 'true' : 'false'}  onChange={handleChange}></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Last Attempeted</S.Label>
                <S.ShortInput id='lastAttempted' type='date' value={problemState.lastAttemptSolve} onChange={handleChange}></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Last Attempt Solve</S.Label>
                <S.ShortInput id='lastAttemptSolve' type='checkbox' value={problemState.firstAttemptSolve === 'false' ? 'true' : 'false'} onChange={handleChange}></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Last Time Taken</S.Label>
                <S.ShortInput id='lastTimeTaken' onChange={handleChange}></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Times Solved</S.Label>
                <S.ShortInput id='timesSolved' onChange={handleChange}></S.ShortInput>
                </S.InputGroup>
            </S.TimeLineAttributesContainer>
                <S.InputGroup>
                <S.SubmitButton onClick={handleSubmit}>Submit Problem</S.SubmitButton>
                </S.InputGroup>
        </S.TimeLineContainer>
        </S.FormContainer>
    </>
}

export default ProblemDataForm