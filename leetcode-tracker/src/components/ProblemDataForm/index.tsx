import React, {FunctionComponent} from "react";
import * as S from './style'

const ProblemDataForm:FunctionComponent = () => {
    return <> <S.FormTitle>Leetcode Problem Tracker Form</S.FormTitle>
    <S.FormContainer>
        <S.SectionContainer>
            <S.Section>
                    <S.SectionTitle>Problem Desc</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                            <S.Label>Problem No.</S.Label>
                            <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.Label>Problem Description</S.Label>
                            <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>DataStructures Used</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                        <S.Label>DataStructure 1</S.Label>
                        <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>DataStructure 2</S.Label>
                        <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>DataStructure 3</S.Label>
                        <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Optimal Big Os</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                            <S.Label>Time Complexity</S.Label>
                            <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.Label>Space Complexity</S.Label>
                            <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Algorithms Used</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                            <S.Label>Algorithm 1</S.Label>
                            <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.Label>Algorithm 2</S.Label>
                            <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Concepts Used</S.SectionTitle>
                    <S.AttributesContainer>
                        <S.InputGroup>
                        <S.Label>Concept 1</S.Label>
                        <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>Concept 2</S.Label>
                        <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                        <S.InputGroup>
                        <S.Label>Concept 3</S.Label>
                        <S.ShortInput></S.ShortInput>
                        </S.InputGroup>
                    </S.AttributesContainer>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>Notes</S.SectionTitle>
                    <S.InputGroup><S.Notes/></S.InputGroup>
                </S.Section>
        </S.SectionContainer>
        <S.TimeLineContainer>
            <S.SectionTitle>TimeLine</S.SectionTitle>
            <S.TimeLineAttributesContainer>
                <S.InputGroup>
                <S.Label>First Attempted</S.Label>
                <S.ShortInput></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>First Attempt Solve</S.Label>
                <S.ShortInput></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Last Attempeted</S.Label>
                <S.ShortInput></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Last Attempt Solve</S.Label>
                <S.ShortInput></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Last Time Taken</S.Label>
                <S.ShortInput></S.ShortInput>
                </S.InputGroup>
                <S.InputGroup>
                <S.Label>Times Solved</S.Label>
                <S.ShortInput></S.ShortInput>
                </S.InputGroup>
            </S.TimeLineAttributesContainer>
        </S.TimeLineContainer>
        </S.FormContainer>
    </>
}

export default ProblemDataForm