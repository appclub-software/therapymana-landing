const DEFAULT_APP_URL = 'https://app.therapymana.com';

/** Base URL of the Therapymana app (no trailing slash). Override with VITE_APP_URL. */
export const APP_URL = (import.meta.env.VITE_APP_URL?.trim() || DEFAULT_APP_URL).replace(/\/+$/, '');

export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = `${APP_URL}/signup`;
