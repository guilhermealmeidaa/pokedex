import styled from "styled-components";
import background from "../../assets/background/background-day.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ContainerInfo = styled.div`
    width: 70%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
`;

export const UpperInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: aliceblue; */
`;

export const PokeBackground = styled.div`
    width: 40%;
    height: 50vh;
    /* background-color: #57B6D; */
    background-image: url(${background}); ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    
`;

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const PokeDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    width: 40%;
    height: 170px;
    /* background-color: white; */
    background-color: #1E1E1E;
    border-radius: 20px;
    border-bottom: 3px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    gap: 25px;
`;

export const DescriptionTitle = styled.div`
    width: 50%;
    /* background-color: white; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DescriptionLower = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
`;

export const Lower = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LowerCollumn = styled.div`

`

export const DescriptionText = styled.text`
    color: #F6F0ED;
    font-weight: 500;
`;

export const TypeImage = styled.img`
    height: 23px;
`;