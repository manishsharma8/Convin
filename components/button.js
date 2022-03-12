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
			className={`bg-gradient-to-tr from-gray-800 to-gray-900 py-3 shadow-lg px-2 rounded-xl transition-all duration-500 ${
				id === selectedButton ? 'ring-4 ring-gray-500/50' : ''
			}`}
		>
			{id}
		</button>
	);
};

export default Button;
