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
			className={`py-3 px-2 rounded-xl ${
				id === selectedButton ? 'bg-blue-700' : 'bg-blue-500'
			}`}
		>
			{id}
		</button>
	);
};

export default Button;
