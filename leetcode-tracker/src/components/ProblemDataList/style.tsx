import styled from 'styled-components'

const ProblemListContainer = styled.form`
margin-top: 100px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
margin-bottom: 100px;
display: flex;
color: white;
background: blue;
border-radius: 10px;
padding: 10px;
width: 90%;
font: 30px 'Gabriola', 'MV Boli';
flex-wrap: wrap;
`
const ProblemListTitle = styled.h1`
font: 50px 'Papyrus', fantasy;
text-align: center;
color: white;
margin: 100px`

const ProblemListElement = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
border-bottom: 2px solid black;
`
const ProblemNumber = styled.p`
background: darkBlue;
width: 5%;
text-align: center;
`

const ProblemDescription = styled.p`
width: 70%;
`

const ViewButton = styled.button`
align-self: center;
width: 100px;
height: 40px;
background: green;
border-radius: 10px;
color: white;
`

const NoProblems = styled.div`
text-align: center;
width: 100%;
`

export {ProblemListContainer, ProblemListTitle, ProblemListElement, ProblemNumber, ProblemDescription, ViewButton, NoProblems}