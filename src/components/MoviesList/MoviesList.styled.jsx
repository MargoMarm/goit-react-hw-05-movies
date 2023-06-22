import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  gap: 15px;
  display: flex;
  padding: 0;
`;

export const Card = styled.li`
  border-radius: 10px;
  width: 300px;
  text-align: center;
  :hover {
    transform: scale(1.03)
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
`;

export const Img = styled.img`
  border-radius: inherit;
  width: 300px;
  height: 450px;
  border-radius: 10px;
`;