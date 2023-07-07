import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px auto;
  padding: 16px;
  width: 600px;
  text-align: center;
  border-radius: 10px;

  .item{
    width: 80px;
    padding: 10px;
    border: 1px solid blue;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  .name {
    margin: 0;
    font-weight: 700;
    color: #030360;
  }

`;

export const StatusStyled = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
color: ${({isOnline}) => 
isOnline ? 'green' : 'grey'};
`;
