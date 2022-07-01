export default function fetcher(url: string, data: any) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
}

export function patchFetcher(url: string, data: any) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
}
