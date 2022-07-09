import {FunctionComponent} from 'React'
import * as S from './style'

const ErrorMessage: FunctionComponent<string> = (errorText: string) => {
    return <S.ErrorText>{errorText}</S.ErrorText>
}

export { ErrorMessage }