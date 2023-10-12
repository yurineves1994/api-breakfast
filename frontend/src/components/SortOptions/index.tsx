import React from 'react';
import * as S from './style';

interface SortOptionsProps {
  sortOrder: string;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortOrder, handleSortChange }) => {
  return (
    <S.SortWrapper>
      <S.SortLabel>Ordenar por:</S.SortLabel>
      <S.SortSelect value={sortOrder} onChange={handleSortChange}>
        <option value='asc'>Nome (A-Z)</option>
        <option value='desc'>Nome (Z-A)</option>
      </S.SortSelect>
    </S.SortWrapper>
  );
};

export default SortOptions;
