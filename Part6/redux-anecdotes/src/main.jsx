import ReactDOM from 'react-dom/client'
//import store  from './store'
//import { Provider } from 'react-redux'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>
  /*<Provider store={store}>
    <App />
  </Provider>*/
)