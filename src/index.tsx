import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<MantineProvider withGlobalStyles withNormalizeCSS>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MantineProvider>
);
