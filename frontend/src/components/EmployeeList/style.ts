import styled from 'styled-components';

export const EmployeeListWrapper = styled.div`
  max-width: 800px;
  width: 100vw;
  margin: 0 auto;
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3498db;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #2980b9;
  }
`;

export const EmployeeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const EmployeeTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf0f1;
  }
`;

export const EmployeeTableHeader = styled.th`
  background-color: #3498db;
  color: white;
  padding: 15px;
  text-align: left;
`;

export const EmployeeTableData = styled.td`
  padding: 15px;
  text-align: left;
  text-transform: uppercase;
`;
