import ReactDOM from 'react-dom/client';
import { RoutesList } from './routes/RoutesList';
import GlobalStyle from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <RoutesList />
  </>,
);
