const Card = ({ user }) => {
	return (
		<div>
			<div className="bg-gray-900 rounded-xl mb-10 p-10">
				<h1 className="text-4xl">
					{user.first_name} {user.last_name}
				</h1>
				<h3 className="text-xl mt-3 text-gray-400">{user.email}</h3>
			</div>
		</div>
	);
};

export default Card;
