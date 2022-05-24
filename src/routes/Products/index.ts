export async function get() {
	const products = [
		{
			id: 0,
			src: 'https://i.imgur.com/pXKfMig.jpg',
			alt: 'Vestido lago rojo',
			price: 90
		},
		{
			id: 1,
			src: 'https://i.imgur.com/pXKfMig.jpg',
			alt: 'Vestido de noche negro',
			price: 100
		},
		{
			id: 2,
			src: 'https://i.imgur.com/pXKfMig.jpg',
			alt: 'Vestido colorido',
			price: 110
		},
		{
			id: 3,
			src: 'https://i.imgur.com/pXKfMig.jpg',
			alt: 'Pantalon blanco',
			price: 120
		}
	];
	return {
		body: {
			products
		}
	};
}
