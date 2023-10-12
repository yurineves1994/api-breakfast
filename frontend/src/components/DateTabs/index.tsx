import * as S from './style';

interface DateTabsProps {
  data: { date: string }[];
  activeDate: string;
  setActiveDate: (date: string) => void;
}

const DateTabs = ({ data, activeDate, setActiveDate }: DateTabsProps) => {
  const uniqueDates = [...new Set(data.map((item) => item.date))];

  return (
    <S.TabWrapper>
      {uniqueDates.map((date) => (
        <S.TabButton key={date} active={date === activeDate} onClick={() => setActiveDate(date)}>
          {date}
        </S.TabButton>
      ))}
    </S.TabWrapper>
  );
};

export default DateTabs;
