import React, { useState } from 'react';
import BoxInputs from './components/BoxInputs/BoxInputs';
import Card from './components/Card/Card'
import './Form.css';

const Form = () => {
	const [ state, setState ] = useState({
		nombre: '',
		apellido: '',
    cancionFavorita: ''
	});

  const [ send, setSend ] = useState(false);
  const [ error, setError ] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
    if(state.nombre.trim()!== "" && state.nombre.length > 3 && state.nombre.charAt(0) !== " " && state.apellido.length > 6){
      setSend(true);
      setError(false);
    }else{
      setError(true)
    }
	};

	return (
    <div>
      <form onSubmit={handleSubmit}>
			<BoxInputs 
        nombre={state.nombre} 
        apellido={state.apellido} 
        cancionFavorita={state.cancionFavorita} 
        handleChange={handleChange} 
      />
			<button type="submit">Enviar</button>
		</form>
    {
    error && (
        <p className='error-messages'>
          El campo de nombre debe contener más de 3 caracteres y no debes añadir espacios al inicio o al final. El apellido debe tener más de 6 caracteres
        </p>
      )
    }
    {
      send && (
        <div className='card'>
          <Card
          nombre={state.nombre}
          apellido={state.apellido}
          cancionFavorita={state.cancionFavorita}
        />
        </div>
      )
    }
    </div>
		
	);
};

export default Form;
