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
					key={i}
					id={i}
					selectedButton={selectedButton}
					setSelectedButton={setSelectedButton}
				></Button>
			);
		}
		return buttons;
	};

	return (
		<>
			{loading ? (
				<div className="loader center">
					<span></span>
				</div>
			) : (
				<div className="m-16 md:28">
					<Card user={user} />
					<div className="grid gap-x-6 md:gap-x-20 gap-y-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-3xl">
						{displayButtons()}
					</div>
				</div>
			)}
		</>
	);
}
