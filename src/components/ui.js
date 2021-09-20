import styled from "styled-components";

export const Sort = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px 0;
    font-size: 15px; 
`;

export const SortTitle = styled.h2`
    font-size: 26px;
    text-transform: uppercase;
    margin: 15px 0 15px 0;
`;


export const ProductsWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const ProductItemWrapper = styled.div`
    width: 100%;
    margin: 15px 0;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: top;
    border: 1px solid rgba(192,192,192, .5);
    border-radius: 10px;
`;

export const ProductInfoWrapp = styled.div`
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 10px 0 10px;
`;

export const ProductImg = styled.img`
   height: 100px;
   margin: 0 10px 0 10px;
`;

export const ProductName = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const ProductShortDescription = styled.span`
    font-size: 12px;
    color: rgba(105,105,105, 0.8);
    margin-bottom: 5px;
`;

export const ProductCount = styled.span`
    font-size: 12px;
    width: 30px;
`;

export const ProductMoreInfoLink = styled.a`
    margin-left: 30px;
`;