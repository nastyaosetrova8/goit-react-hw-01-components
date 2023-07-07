import styled from 'styled-components';

export const TableStyled = styled.table`
 margin: auto;
 width: 600px;
 border-collapse: collapse;
 text-align: center;
 border-radius: 8px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
 
 thead{
    background-color: #b4b4f8;
 }

 tr:nth-child(2n){
background-color: #d3d3f5;
 }

 th,
 td {
padding: 10px;
  border: 1px solid #b4b4f8;
 }
`