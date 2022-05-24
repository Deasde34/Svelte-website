<script lang="ts">
	import { onMount } from 'svelte';

	export let products: any[];
	let minPrice: number = 0;
	let maxPrice: number;

	onMount(() => {
		minPrice = products[0].price;
		maxPrice = products[products.length - 1].price;
	});

	function handleAddToCart(id: number) {
		let cart = JSON.parse(localStorage.getItem('cart') || '[]');
		if (isItemInCart(id)) {
			cart = cart.map((item: any) => {
				if (item.id === id) {
					item.quantity++;
				}
				return item;
			});
		} else {
			cart.push({ id, quantity: 1 });
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		console.log(cart);
	}

	function isItemInCart(id: number) {
		let cart = JSON.parse(localStorage.getItem('cart') || '[]');
		return cart.includes(id);
	}

	function sortAZ() {
		products.sort((a: any, b: any) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
	}
</script>

<div class="row mt-3">
	<div class="col-sm-3" style="background-color: aqua;">
		<h3 class="text-center">Filters</h3>
		<div class="mx-5">
			<div class="form-check">
				<input
					type="checkbox"
					class="form-check-input"
					name=""
					id=""
					value="checkedValue"
					checked
				/>
				<label class="form-check-label" for=""> Show in stock </label>
			</div>
			<div class="d-flex">
				<div class="mb-3">
					<label for="minPriceSelect" class="form-label">Min Price</label>
					<input
						type="number"
						class="form-control"
						name="minPriceSelect"
						id="minPriceSelect"
						aria-describedby="minPriceSelect"
						placeholder={minPrice.toString()}
						min={minPrice}
					/>
					<small id="minPriceSelect" class="form-text text-muted">minPriceSelect</small>
				</div>
			</div>
		</div>
	</div>

	<div class="col-sm-9">
		<div class="container mt-3 ml-0 pl-0">
			<h2 class="text-center">ROPA</h2>
			<div class="row">
				{#each products as image}
					<div>
						<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
							<div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
								<div class="col">
									<div class="card h-100 shadow-sm">
										<img src={image.src} class="card-img-top" alt={image.alt} />
										<div class="label-top shadow-sm">DELL</div>
										<div class="card-body">
											<div class="clearfix mb-3">
												<span class="float-start price-hp">{image.price}</span>
												<span class="float-end"
													><a class="text-muted small" href="/">Reviews</a></span
												>
											</div>
											<h5 class="card-title">
												Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem
												eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit
												odit ut. Saepe, iste optio laudantium sed aliquam sequi.
											</h5>
											<div class="text-center my-4">
												<a href="/" class="btn btn-warning">Check offer</a>
											</div>
											<div class="clearfix mb-1">
												<span class="float-start"><i class="far fa-question-circle" /></span>
												<span class="float-end"><i class="fas fa-plus" /></span>
											</div>
										</div>
									</div>
								</div>
								<div class="col" />
								<div class="card h-100 shadow-sm">
									<img src={image.src} class="card-img-top" alt={image.alt} />
									<div class="label-top shadow-sm">DELL</div>
									<div class="card-body">
										<div class="clearfix mb-3">
											<span class="float-start price-hp">{image.price}</span>
											<span class="float-end"><a class="text-muted small" href="/">Reviews</a></span
											>
										</div>
										<h5 class="card-title">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque
											ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut.
											Saepe, iste optio laudantium sed aliquam sequi.
										</h5>
										<div class="text-center my-4">
											<a href="/" class="btn btn-warning">Check offer</a>
										</div>
										<div class="clearfix mb-1">
											<span class="float-start"><i class="far fa-question-circle" /></span>
											<span class="float-end"><i class="fas fa-plus" /></span>
										</div>
									</div>
								</div>
								<div class="col" />
								<div class="col" />
								<div class="card h-100 shadow-sm">
									<img src={image.src} class="card-img-top" alt={image.alt} />
									<div class="label-top shadow-sm">DELL</div>
									<div class="card-body">
										<div class="clearfix mb-3">
											<span class="float-start price-hp">{image.price}</span>
											<span class="float-end"><a class="text-muted small" href="/">Reviews</a></span
											>
										</div>
										<h5 class="card-title">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque
											ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut.
											Saepe, iste optio laudantium sed aliquam sequi.
										</h5>
										<div class="text-center my-4">
											<a href="/" class="btn btn-warning">Check offer</a>
										</div>
										<div class="clearfix mb-1">
											<span class="float-start"><i class="far fa-question-circle" /></span>
											<span class="float-end"><i class="fas fa-plus" /></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
	:root {
		--font1: 'Heebo', sans-serif;
		--font2: 'Fira Sans Extra Condensed', sans-serif;
		--font3: 'Roboto', sans-serif;
	}
	body {
		font-family: var(--font3);
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
	}
	h2 {
		font-weight: 900;
	}
	.container-fluid {
		max-width: 1200px;
	}
	.card {
		background: #fff;
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
		transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
			0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
		border: 0;
		border-radius: 1rem;
	}
	.card-img,
	.card-img-top {
		border-top-left-radius: calc(1rem - 1px);
		border-top-right-radius: calc(1rem - 1px);
	}
	.card h5 {
		overflow: hidden;
		height: 56px;
		font-weight: 900;
		font-size: 1rem;
	}
	.card-img-top {
		width: 100%;
		max-height: 180px;
		object-fit: contain;
		padding: 30px;
	}
	.card h2 {
		font-size: 1rem;
	}
	.card:hover {
		transform: scale(1.05);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
	}
	.card-title {
		font-size: 1.2rem;
		font-weight: 900;
		color: black;
	}
	.label-top {
		position: absolute;
		background-color: #8bc34a;
		color: #fff;
		top: 8px;
		right: 8px;
		padding: 5px 10px 5px 10px;
		font-size: 0.7rem;
		font-weight: 600;
		border-radius: 3px;
		text-transform: uppercase;
	}
	.top-right {
		position: absolute;
		top: 24px;
		left: 24px;
		width: 90px;
		height: 90px;
		border-radius: 50%;
		font-size: 1rem;
		font-weight: 900;
		background: #ff5722;
		line-height: 90px;
		text-align: center;
		color: white;
	}
	.top-right span {
		display: inline-block;
		vertical-align: middle;
	}
	@media (max-width: 768px) {
		.card-img-top {
			max-height: 250px;
		}
	}
	.over-bg {
		background: rgba(53, 53, 53, 0.85);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(0px);
		-webkit-backdrop-filter: blur(0px);
		border-radius: 10px;
	}
	.btn {
		font-size: 1rem;
		font-weight: 500;
		text-transform: uppercase;
		padding: 5px 50px 5px 50px;
	}
	.box .btn {
		font-size: 1.5rem;
	}
	@media (max-width: 1025px) {
		.btn {
			padding: 5px 40px 5px 40px;
		}
	}
	@media (max-width: 250px) {
		.btn {
			padding: 5px 30px 5px 30px;
		}
	}
	.btn-warning {
		background: none #f7810a;
		color: #ffffff;
		fill: #ffffff;
		border: none;
		text-decoration: none;
		outline: 0;
		box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);
		border-radius: 100px;
	}
	.btn-warning:hover {
		background: none #ff962b;
		color: #ffffff;
		box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35);
	}
	.bg-success {
		font-size: 1rem;
		background-color: #f7810a !important;
	}
	.bg-danger {
		font-size: 1rem;
	}
	.price-hp {
		font-size: 1rem;
		font-weight: 600;
		color: darkgray;
	}
	.amz-hp {
		font-size: 0.7rem;
		font-weight: 600;
		color: darkgray;
	}
	.fa-question-circle:before {
		color: darkgray;
	}
	.fa-plus:before {
		color: darkgray;
	}
	.box {
		border-radius: 1rem;
		background: #fff;
		box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
		transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
			0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
	}
	.box-img {
		max-width: 300px;
	}
	.thumb-sec {
		max-width: 300px;
	}
	@media (max-width: 576px) {
		.box-img {
			max-width: 200px;
		}
		.thumb-sec {
			max-width: 200px;
		}
	}
	.inner-gallery {
		width: 60px;
		height: 60px;
		border: 1px solid #ddd;
		border-radius: 3px;
		margin: 1px;
		display: inline-block;
		overflow: hidden;
		-o-object-fit: cover;
		object-fit: cover;
	}
	@media (max-width: 370px) {
		.box .btn {
			padding: 5px 40px 5px 40px;
			font-size: 1rem;
		}
	}
	.disclaimer {
		font-size: 0.9rem;
		color: darkgray;
	}
	.related h3 {
		font-weight: 900;
	}
	footer {
		background: #212529;
		height: 80px;
		color: #fff;
	}
</style>
