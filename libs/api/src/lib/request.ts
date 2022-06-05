type Options = {
  method: string;
  headers: {
    [key: string]: string;
  };
  body?: string;
};

export const request = async <TData>(
  baseUrl: string,
  path: RequestInfo,
  method = 'GET',
  body?: string
): Promise<TData> => {
  const options: Options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = body;
  }

  const response = await fetch(`${baseUrl}${path}`, options);

  return response.json();
};

// 27c2f45f592dbcd0a8f2a86bc9c8d14a70bc04a1