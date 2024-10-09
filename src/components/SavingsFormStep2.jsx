// components/SavingsFormStep2.js
import React from 'react';
import { useParams } from 'react-router-dom';

const SavingsFormStep2 = () => {
	const { type } = useParams(); // Obtenemos el tipo de ahorro de la URL

	const renderForm = () => {
		switch (type) {
			case 'facil':
				return <SavingsEasy />;
			case 'moderado':
				return <SavingsModerate />;
			case 'extremo':
				return <SavingsExtreme />;
			case 'personalizado':
				return <SavingsCustom />;
			default:
				return <p>Error: tipo de ahorro no válido</p>;
		}
	};

	return (
		<div>
			<h1>Plan de Ahorro</h1>
			{renderForm()}
		</div>
	);
};

export default SavingsFormStep2;

// Subcomponentes para los diferentes métodos de ahorro:

const SavingsEasy = () => (
	<div>
		<h2>Calculadora 50/30/20</h2>
		{/* Aquí podrías implementar el formulario para Ahorro Fácil */}
	</div>
);

const SavingsModerate = () => (
	<div>
		<h2>Modelo de los 6 frascos</h2>
		{/* Aquí podrías implementar el formulario para Ahorro Moderado */}
	</div>
);

const SavingsExtreme = () => (
	<div>
		<h2>Método FIRE (Financial Independence, Retire Early)</h2>
		{/* Aquí podrías implementar el formulario para Ahorro Extremo */}
	</div>
);

const SavingsCustom = () => (
	<div>
		<h2>Calculadora de ahorro basado en objetivos</h2>
		{/* Aquí podrías implementar el formulario para Ahorro Extremo */}
	</div>
);
