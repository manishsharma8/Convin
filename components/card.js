import { useEffect, useState } from 'react';
import Image from 'next/image';

const Card = ({ user }) => {
	const [firstName, setFirstName] = useState('Manish');
	const [lastName, setLastName] = useState('Sharma');
	const [email, setEmail] = useState('sharmamanish8301@gmail.com');
	const [avatar, setAvatar] = useState('http://via.placeholder.com/70/fff');

	useEffect(() => {
		if (Object.keys(user).length != 0) {
			setFirstName(user.first_name);
			setLastName(user.last_name);
			setEmail(user.email);
			setAvatar(user.avatar);
		}
	}, [user]);

	return (
		<div>
			<div className="bg-gray-900 rounded-xl mb-10 p-10">
				<div className="flex">
					<div className="my-auto h-full mr-5">
						<Image
							className="rounded-full"
							src={avatar}
							alt="Picture of the author"
							width={70}
							height={70}
						/>
					</div>
					<div>
						<h1 className="text-4xl">{`${firstName} ${lastName}`}</h1>
						<h3 className="text-xl mt-3 text-gray-400">{`Email: ${email}`}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
