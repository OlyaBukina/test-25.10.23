import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
`;

export const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  height: 300px;
`;

export const Bar = styled.div`
  flex: 1;
  background-color: #0074d9;
  border: 1px solid #0056b3;
  text-align: center;
  color: white;
  padding: 5px;
  box-sizing: border-box;
`;

export const Label = styled.div`
  margin-top: 5px;
`;
