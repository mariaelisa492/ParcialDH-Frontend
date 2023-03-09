import React from 'react';

const BoxInputs = (props) => {
	return (
		<div>
			<label htmlFor="name">Nombre:</label>
			<input type="text" id="nombre" name="nombre" value={props.nombre} onChange={props.handleChange} />
			<br />
			<label htmlFor="lastName">Apellido:</label>
			<input type="text" id="apellido" name="apellido" value={props.apellido} onChange={props.handleChange} />
            <br />
			<label htmlFor="song">Tu canción favorita es:</label>
			<input type="text" id="cancionFavorita" name="cancionFavorita" value={props.cancionFavorita} onChange={props.handleChange} />
		</div>
	);
};

export default BoxInputs;
