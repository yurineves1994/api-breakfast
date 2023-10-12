import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background: #ffffff;
  z-index: 2;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #032958;
  gap: 10px;
`;

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #032958;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;
