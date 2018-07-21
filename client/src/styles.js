import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 20px 20px 20px;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    height: 170px;
    width: 200px;
    max-width: 300px;
    margin-top: 7px;

    img {
      height: 130px;
      width: 130px;
      border-radius: 50%;
    }

    strong {
      margin-left: 10px;
    }
  }
`;