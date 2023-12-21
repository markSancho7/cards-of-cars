import Card from './components/card/Card';
import Container from './components/container/Container';

const App = () => {
	return (
		<Container>
			<Card
				color='orange'
				src='./public/images 2/icon-sedans.svg'
				title='SEDANS'
				description='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				colorButton='letterOrange'
			/>

			<Card
				color='green'
				src='./public/images 2/icon-suvs.svg'
				title='SUVS'
				description='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				colorButton='letterGreen'
			></Card>

			<Card
				color='greendark'
				src='./public/images 2/icon-luxury.svg'
				title='LUXURY'
				description='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
				colorButton='letterGreenDark'
			></Card>
		</Container>
	);
};

export default App;
