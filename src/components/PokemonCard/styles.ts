import styled from 'styled-components';

export const Container = styled.div `
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F6F0ED;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    cursor: pointer;
`;

export const LeftContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* align-items: center; */
    justify-content: center;
    margin-left: 10px;
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: aliceblue;
`;

export const PokeImage = styled.img`
    height: 120px;
`;

export const PokeNumber = styled.text`
    font-size: small;
`;

export const PokeName = styled.text`
    font-size: larger;
    font-weight: 500;
`;

export const PokeType = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const TypeImage = styled.img`
    height: 23px;
`;