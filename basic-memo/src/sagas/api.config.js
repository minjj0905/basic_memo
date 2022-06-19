export const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://abed-121-130-166-61.jp.ngrok.io/api'
    : 'http://127.0.0.1:8000/api';
