import * as S from './style';

interface Employee {
  id: number;
  date: string;
  name: string;
  document: string;
  foods: string[];
}

interface EmployeeListProps {
  data: Employee[];
  activeDate: string;
}

const EmployeeList = ({ data, activeDate }: EmployeeListProps) => {
  const filteredEmployees = data.filter((employee) => {
    console.log('employee.date:', employee.date);
    console.log('activeDate:', activeDate);
    return employee.date === activeDate;
  });

  return (
    <>
      <h2>Lista de Funcionários</h2>
      <S.EmployeeListWrapper>
        <S.EmployeeTable>
          <tbody>
            <S.EmployeeTableRow>
              <S.EmployeeTableHeader>Nome</S.EmployeeTableHeader>
              <S.EmployeeTableHeader>Documento</S.EmployeeTableHeader>
              <S.EmployeeTableHeader>Alimentos</S.EmployeeTableHeader>
            </S.EmployeeTableRow>

            {filteredEmployees.map((employee, index) => (
              <S.EmployeeTableRow key={index}>
                <S.EmployeeTableData>
                  <strong>{employee.name}</strong>
                </S.EmployeeTableData>
                <S.EmployeeTableData>
                  <strong>{employee.document}</strong>
                </S.EmployeeTableData>
                <S.EmployeeTableData>{employee.items.join(', ')}</S.EmployeeTableData>
              </S.EmployeeTableRow>
            ))}
          </tbody>
        </S.EmployeeTable>
      </S.EmployeeListWrapper>
    </>
  );
};

export default EmployeeList;
