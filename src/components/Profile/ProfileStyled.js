import styled from 'styled-components';

export const ProfileStyled = styled.div`
  box-sizing: border-box;
  border: 1px solid blue;
  margin: 30px auto;
  padding: 15px 0 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: gray;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  img {
    display: block;
    padding: 10px;
    width: 300px;
    border: 3px solid blue;
    border-radius: 50%;
  }
`;

export const NameStyled = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #030360;
`;

export const StatsStyled = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    color: #030360;
    background-color: #d3d3f5;
    border-top: 1px solid blue;
  }

  li:not(:last-child){
    border-right: 1px solid blue;
  }
`;
