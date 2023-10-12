import { useState } from 'react';
import InputMask from 'react-input-mask';
import * as S from './style';
import { useHttpPost } from '~/hooks/useFetch';

interface EmployeeData {
  name: string;
  document: string;
  date: string;
  items: string[];
}

export const AddEmployeeForm = () => {
  const { postData, loading: postLoading } = useHttpPost();
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    name: '',
    document: '',
    date: '',
    items: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFoodsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const items = e.target.value.split(',').map((items) => items.trim());
    setEmployeeData((prevData) => ({
      ...prevData,
      items,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData('http://localhost:8080/api/breakfast', employeeData);
    setEmployeeData({
      name: '',
      document: '',
      date: '',
      items: [],
    });
  };

  return (
    <S.FormWrapper>
      <h2>Cadastrar Café da Manhã</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <S.FormLabel>Nome:</S.FormLabel>
          <S.FormInput
            type='text'
            name='name'
            value={employeeData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <S.FormLabel>CPF:</S.FormLabel>
          <InputMask
            mask='999.999.999-99'
            maskChar=''
            value={employeeData.document}
            onChange={(e) =>
              handleChange({ target: { name: 'document', value: e.currentTarget.value } })
            }
          >
            {(inputProps: any) => <S.FormInput {...inputProps} required />}
          </InputMask>
        </div>
        <div>
          <S.FormLabel>Data:</S.FormLabel>
          <InputMask
            mask='99/99/9999'
            maskChar=''
            value={employeeData.date}
            onChange={(e) =>
              handleChange({ target: { name: 'date', value: e.currentTarget.value } })
            }
            placeholder='dd/mm/yyyy'
            required
          >
            {(inputProps: any) => <S.FormInput {...inputProps} />}
          </InputMask>
        </div>
        <div>
          <S.FormLabel>Café da Manhã (separado por vírgulas):</S.FormLabel>
          <S.FormInput
            type='text'
            name='items'
            value={employeeData.items.join(',')}
            onChange={handleFoodsChange}
            required
          />
        </div>
        <S.FormButton type='submit'>Adicionar</S.FormButton>
      </form>
    </S.FormWrapper>
  );
};
