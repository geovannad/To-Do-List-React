import styled from "styled-components";

export const WrapperSecound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
`;

export const TextInput = styled.input`
  padding: 5px;
  border: 2px solid rgb(92, 103, 128);
  border-radius: 10px;
`;

export const Bt = styled.button`
  background-color: rgb(237, 213, 59);
  border-radius: 10px;
  padding: 5px;
  margin-left: 10px;
  color: azure;
`;
export const BtRemover = styled.button`
  background-color: rgb(237, 59, 59);
  border: none;
  border-radius: 6px;
  padding: 5px;
  margin-left: 10px;
  color: azure;
`;
export const List = styled.li`
  display: flex;
  background-color: rgb(213, 221, 230);
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgb(142, 157, 157);
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;
export const WrapperFirst = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
    text-decoration: ${(prop) => prop.type && "line-through"};
`
