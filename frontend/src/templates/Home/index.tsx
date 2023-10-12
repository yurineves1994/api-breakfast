import React, { useEffect, useState } from 'react';
import { useHttpGet } from '~/hooks/useFetch';
import DateTabs from '../../components/DateTabs';
import EmployeeList from '../../components/EmployeeList';
import SortOptions from '../../components/SortOptions';

interface Employee {
  date: string;
  name: string;
  document: string;
  foods: string[];
}

export function Home() {
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const { data: employee, setData } = useHttpGet('http://localhost:8080/api/breakfast');
  const [activeDate, setActiveDate] = useState<string>('');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);

    const sortedData = [...employee];

    if (e.target.value === 'asc') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    setData(sortedData);
  };

  return (
    <div>
      <DateTabs data={employee} activeDate={activeDate} setActiveDate={setActiveDate} />
      <SortOptions sortOrder={sortOrder} handleSortChange={handleSortChange} />
      <EmployeeList data={employee} activeDate={activeDate} />
    </div>
  );
}
