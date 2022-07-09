import styled from "styled-components"

const FormTitle = styled.h1`
font: 50px 'Papyrus', fantasy;
text-align: center;
color: white;
margin: 100px`

const FormContainer = styled.form`
margin-top: 100px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
display: flex;
color: white;
`
const SectionContainer = styled.div`
background: blue;
border-radius: 10px;
padding: 10px;
`

const TimeLineContainer = styled.div`
background-color: red;
display: flex;
flex-direction: column;
margin-left: 20px;
border-radius: 10px;
`

const Section = styled.section`

`
const SectionTitle = styled.h1`
text-align: center;
`
const Label = styled.label`
padding-right: 20px;
font: 20px 'Gabriola', 'MV Boli';
font-weight: bold;
width: auto;
`
const ShortInput = styled.input`
width: 100%;
height: 40px;
border-radius: 10px;
`
const InputGroup = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;
width: 90%;
padding: 10px;

`
const ErrorContainer = styled.div`
display: flex;
justify-content: space-around;
text-align: center;
`
const ProblemNoError = styled.div`
display: inline;
width: 50%;
`

const ProblemDescError = styled.div`
display: inline;
width: 50%;
`

const AttributesContainer = styled.div`
display: flex;
`

const TimeLineAttributesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 80%;
`
const Notes = styled.input.attrs({type: 'text'})`
width: 100%;
border-radius: 10px;
height: 150px;
`
const SubmitButton = styled.button`
width: 100%;
border-radius: 10px;
background: green;
color: white;
height: 40px;
`


export {Section, Label, ShortInput, InputGroup, AttributesContainer, SectionTitle, FormContainer, TimeLineContainer, SectionContainer, TimeLineAttributesContainer, FormTitle, Notes, SubmitButton, ErrorContainer, ProblemNoError, ProblemDescError}