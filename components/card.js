import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
	demoAvatar,
	demoEmail,
	demoFirstName,
	demoLastName,
} from '../utils/config';

const Card = ({ user }) => {
	const [firstName, setFirstName] = useState(demoFirstName);
	const [lastName, setLastName] = useState(demoLastName);
	const [email, setEmail] = useState(demoEmail);
	const [avatar, setAvatar] = useState(demoAvatar);

	useEffect(() => {
		if (Object.keys(user).length != 0) {
			setFirstName(user.first_name);
			setLastName(user.last_name);
			setEmail(user.email);
			setAvatar(user.avatar);
		}
	}, [user]);

	return (
		<>
			<div className="card rounded-xl mb-10 p-5 md:p-10">
				<div className="mx-auto text-center justify-center">
					<div className="h-full">
						<Image
							className="rounded-full"
							src={avatar}
							alt="Picture of the author"
							width={100}
							height={100}
						/>
					</div>
					<div>
						<h1 className="text-4xl font-bold">{`${firstName} ${lastName}`}</h1>
						<a
							href={`mailto: ${email}`}
							className="block break-words mt-3 text-xl text-gray-100"
						>
							{email}
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
