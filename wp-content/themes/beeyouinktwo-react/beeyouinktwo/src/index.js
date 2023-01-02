import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { PageProvider } from './lib/PageContext'
import { ProductProvider } from './lib/ProductContext'
import { CartProvider } from './lib/CartContext'

import reportWebVitals from './reportWebVitals'
import './assets/app.css'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<PageProvider>
				<ProductProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductProvider>
			</PageProvider>
		</BrowserRouter>
	</React.StrictMode>
)

reportWebVitals()

