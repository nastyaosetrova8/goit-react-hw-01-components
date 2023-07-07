import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  margin: 30px auto;
  padding: 12px 0 0;
  width: 600px;
  text-align: center;
  border: 1px solid blue;
  border-radius: 10px;
  color: #030360;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);


  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const StatStyled = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    color: #030360;
    background-color: ${props => props.$color};

  &:not(:last-child){
    border-right: 1px solid white;
  }

  .percentage {
    margin-top: 10px;
    font-size: 20px;
  }
`;


