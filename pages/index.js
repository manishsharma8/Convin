import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, fetchUsers } from '../app/slices/userReducer';
import Button from '../components/button';
import Card from '../components/card';

export default function Home() {
	const [selectedButton, setSelectedButton] = useState(null);
	const { users, user, loading, hasErrors } = useSelector(usersSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const displayButtons = () => {
		const buttons = [];
		for (let i = 1; i <= users.total; i++) {
			buttons.push(
				<Button
					id={i}
					selectedButton={selectedButton}
					setSelectedButton={setSelectedButton}
				></Button>
			);
		}
		return buttons;
	};

	return (
		<div className="m-28">
			<Card user={user} />
			<div className="grid gap-x-20 gap-y-5 grid-cols-6 text-3xl">
				{displayButtons()}
			</div>
		</div>
	);
}
