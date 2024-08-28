const fetchApi = async (
  method: string,
  url: string,
  data?: any,
  headers = { 'Content-Type': 'application/json' },
) => {
  // Create the settings object
  const settings: RequestInit = {
    method: method.toUpperCase(),
    credentials: 'include', // to keep the session on the request,
    headers: { ...headers },
  };

  if (data && method.toUpperCase() !== 'GET') {
    settings.body = JSON.stringify(data); // send it as stringified json
  }

  try {
    const res = await fetch(url, settings);
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};

export default fetchApi;
