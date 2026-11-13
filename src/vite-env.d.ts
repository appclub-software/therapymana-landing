/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the Therapymana web app, e.g. https://app.therapymana.com */
  readonly VITE_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
