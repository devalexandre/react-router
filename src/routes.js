import App from './App';
import Expenses from './pages/expenses'
import Invoices from './pages/invoices'
import Contact from './pages/contact'

const routes = [
   { path: '/', title: 'Home', component: <App />},
   { path: '/invoices', title: 'Invoices', component: <Invoices />},
   { path: '/expenses',title: 'Expenses', component: <Expenses />},
   { path: '/contact', title: 'Contact From', component: <Contact />}
]

export default routes

