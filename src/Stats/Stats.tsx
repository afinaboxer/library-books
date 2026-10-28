
import styled from '@emotion/styled';
import type { BookType } from '../types/book';

interface StatsProps {
  books: BookType;
}

const StatsSection = styled.section`
  margin: 25px 0;
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;