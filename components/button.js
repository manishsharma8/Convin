import { useDispatch } from 'react-redux';
import { fetchUser } from '../app/slices/userReducer';

const Button = ({ id, selectedButton, setSelectedButton }) => {
	const dispatch = useDispatch();
	return (
		<button
			onClick={() => {
				dispatch(fetchUser(id));
				setSelectedButton(id);
			}}
			className={`bg-gradient-to-r from-cyan-500 to-blue-500 py-3 shadow-lg shadow-blue-500/40 px-2 rounded-xl transition-all duration-500 ${
				id === selectedButton ? 'ring-4 ring-blue-500/50' : ''
			}`}
		>
			{id}
		</button>
	);
};

export default Button;
