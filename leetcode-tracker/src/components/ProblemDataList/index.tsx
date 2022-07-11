import {FunctionComponent, ReactNode, useEffect, useState} from 'react'
import * as S from './style'
import { getAllProblems } from '../../api/services/ProblemsService'
import { problemData } from '../ProblemDataForm'

const ProblemDataList: FunctionComponent = () => {
    const [allProblems, setAllProblems] = useState<problemData[] | []>([])

    useEffect(() => {
        fetchProblems()
    }, [])

    const ProblemListElement = (problemNumber: Number, problemDesc: String) => {
        return (
            <S.ProblemListElement>
                <S.ProblemNumber>{problemNumber.toString()}</S.ProblemNumber>
                <S.ProblemDescription>{problemDesc}</S.ProblemDescription>
                <S.ViewButton>View</S.ViewButton>
            </S.ProblemListElement>
        )
    }

    const fetchProblems = async () => {
        try {
            const allProblems = await getAllProblems()
            setAllProblems(allProblems)
            console.log('All my problems are', allProblems)
            
        } catch(err) {
            console.log("Error generating list", err)
        }
    }

    const ProblemList = () => {
        if (allProblems.length === 0) return <S.NoProblems>You haven't started learning any problems yet. No problems in the database</S.NoProblems>
        return allProblems.map(problem => {
            const { problemNumber, problemDesc } = problem
            console.log('All my problem details are', problemNumber, problemDesc)
            return ProblemListElement(problemNumber, problemDesc)
        })
    }

    return (
        <>
            <S.ProblemListTitle>All Problems</S.ProblemListTitle>
            <S.ProblemListContainer>
                {ProblemList()}
            </S.ProblemListContainer>
        </>
    )
}

export {ProblemDataList}