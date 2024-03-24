Vue.component('prod-component', {
	data() {
		return { nameProd: 'Iphone 13 Pro', price: 99.99, available: true };
	},
	template: `
		<div>
			<h2>{{ nameProd }}</h2>
			<p class="price">{{ formattedPrice }}</p>
			<p>{{ available ? 'Товар есть в наличии' : 'Товар закончился' }}</p>
		</div>
	`,
	computed: {
		formattedPrice() {
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			});
			return formatter.format(this.price);
		},
	},
});
