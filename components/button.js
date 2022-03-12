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
			className={`bg-blue-500 py-3 px-2 rounded-xl ${
				id === selectedButton ? 'ring-4 ring-blue-500/50' : ''
			}`}
		>
			{id}
		</button>
	);
};

export default Button;
