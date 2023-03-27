import type {
  ResponseResolver,
  DefaultBodyType,
  RestContext,
  RestRequest,
  PathParams,
} from 'msw';

/**
 * プロフィールモック
 */
export const dataMock = {
  id: 1,
  name: '',
  flag: 0,
  status: 'done'
};
export const getDataMock: ResponseResolver<
  RestRequest<never, PathParams<string>>,
  RestContext,
  DefaultBodyType
> = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(dataMock));
};
export const updateDataMock: ResponseResolver<
  RestRequest<never, PathParams<string>>,
  RestContext,
  DefaultBodyType
> = (req, res, ctx) => {
  return res(ctx.status(200));
};
