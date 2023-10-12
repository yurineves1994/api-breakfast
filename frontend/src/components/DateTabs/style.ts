import styled from 'styled-components';

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#3498db' : '#2c3e50')};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => (props.active ? '#2980b9' : '#34495e')};
  }
`;
