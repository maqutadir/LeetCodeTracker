import { FunctionComponent } from "react";
import * as S from './style'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <S.HeaderContainer>
            <S.Title>Problem Progress Journal</S.Title>
            <S.NavBar>
                <S.NavOptions to="/problemlist">Home</S.NavOptions>
                <S.NavOptions to="/problemlist">Problem List</S.NavOptions>
                <S.NavOptions to="/newproblem">New Problem</S.NavOptions>
                <S.NavOptions to="/newproblem">About</S.NavOptions>
            </S.NavBar>
        </S.HeaderContainer>
    )
}

export { Header }