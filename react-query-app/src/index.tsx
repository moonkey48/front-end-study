import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import { ReactQueryDevtools } from 'react-query/types/devtools';
import ProductsItem from './components/ProductsItem';
import ProductSuspensePage from './pages/ProductSuspensePage';
import ProductNoSuspensePage from './pages/ProductNoSuspensePage';
import SuspenseQuery from './test/suspenseQuery';

const queryClient = new QueryClient({
  defaultOptions:{
		queries: {
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
		}
	}
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/products/suspense' element={<ProductSuspensePage/>} />
          <Route path='/products/nosuspense' element={<ProductNoSuspensePage/>} />
          <Route path='/products/:id' element={<ProductsItem/>} />
          <Route path='/products/test' element={<SuspenseQuery/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
