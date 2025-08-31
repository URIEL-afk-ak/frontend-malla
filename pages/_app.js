

import '../styles/globals.css';
import '../styles/materiaCard.css';
import '../styles/mallaGrid.css';

import Navbar from '../components/Navbar';
import { PlanProvider } from '../context/PlanContext';

export default function MyApp({ Component, pageProps }) {
	return (
		<PlanProvider>
			<Navbar />
			<Component {...pageProps} />
		</PlanProvider>
	);
}
