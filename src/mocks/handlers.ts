import { rest } from 'msw';
import { getDataMock, updateDataMock } from './dataMock';

export const handlers = [
  rest.get('/api/data', getDataMock),
  rest.post('/api/data', updateDataMock),
];
