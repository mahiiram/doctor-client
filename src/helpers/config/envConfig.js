const REACT_APP_API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL_LOCAL || "http://localhost:8080/api/v1";

export const getBaseUrl = () => {
  const trimmed = String(REACT_APP_API_BASE_URL).trim().replace(/\/+$/, "");
  if (!trimmed) return REACT_APP_API_BASE_URL;
  if (/\/api\/v\d+$/i.test(trimmed)) return trimmed;
  return `${trimmed}/api/v1`;
};
