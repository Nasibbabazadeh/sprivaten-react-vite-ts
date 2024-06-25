import styled from 'styled-components'

export const SelectContainer = styled.div`
    height: 91px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`
export const SelectLabel = styled.label`
    color: #252b42;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.2px;
`

export const SelectStyle = styled.select`
    display: flex;
    align-items: center;
    width: 245px;
    height: 50px;
    padding: 11px 21px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #bdbdbd;
    background: #f9f9f9;
    outline: none;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
    & option {
        font-size: 14px;
        line-height: 28px;
        letter-spacing: 0.2px;
    }
`
