import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0,0,0,0.70);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 28px;
`

export const Text = styled.h1`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 3px;
`

export const TextSmall = styled.h2`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 200;
    line-height: normal;
    color: #8c8c8c;
`

export const Link = styled(ReachRouterLink)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 38px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 16px;

    &:last-of-type {
        margin-bottom: 40px;
    }

    ::placeholder {
        font-size: 16px;
        color: #8f8f8f;
    }
`

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0px 0 60px;
    padding: 14px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.8;
    }
`