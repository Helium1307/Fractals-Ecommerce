import { ThemeProvider } from '@material-ui/styles';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { theme } from '../src/shared/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
