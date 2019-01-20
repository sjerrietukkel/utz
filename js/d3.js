d3.json("/databron/cleaned_dataset_kit.json").then(function(data) {
	var byppi = d3.nest()
		.key(function(d) { return d.ppi })
		.entries(data)


	const waffle = d3.select('.waffle')
	const numbers = d3.range(100)

	waffle
		.selectAll('.block')
		.data(numbers)
		.enter()
		.append('div')
		.attr('class', 'block')
		.style('background-color', d => (d < byppi[0].values[0].Cacao - 1 ? '#FE4A49' && d < byppi[0].values[0].Cocoyam - 1 ? '#FF722D' : '#eeeeee'))
	
	console.log(byppi)
	console.log(byppi[0].values[0].Hectare)
	console.log(byppi[0].values[0].Cacao)
	console.log(byppi[0].values[0].Cocoyam)
})
.catch(function(){
	console.log("kut.")
})