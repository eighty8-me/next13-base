export type DataType = {
  [key: string]: string | number | undefined | DataType | DataType[] | unknown;
};

export type ResponseType = {
  status: number;
  message: string;
  data: DataType;
};

export const replaceNullWithUndefined = <T extends DataType>(
  data: T | undefined,
): T | undefined => {
  if (!data) {
    return undefined;
  }

  if (!Object.keys(data).length) {
    return undefined;
  }

  if (Array.isArray(data) && data.length === 0) {
    return undefined;
  }

  const newData: DataType = {};
  Object.entries(data).forEach(([key, value]) => {
    if (value === null) {
      // null なら undefined に変換する
      newData[key] = undefined;
    } else if (Array.isArray(value)) {
      // 配列ならを再起的に処理する
      newData[key] = value.map((item) =>
        replaceNullWithUndefined(item),
      ) as DataType[];
    } else if (typeof value === 'object') {
      // オブジェクトならを再起的に処理する
      newData[key] = replaceNullWithUndefined(value as DataType);
    } else {
      // 変換せずに値をそのままセットする
      newData[key] = value as string | number | undefined;
    }
  });

  return newData as T;
};
