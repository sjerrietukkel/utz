d3.json("/databron/cleaned_dataset_kit.json").then(function(data) {
	var byppi = d3.nest()
		.key(function(d) { return d.ppi })
		.entries(data)

	// var mappedValues = byppi.values.map(d => {
    //     return {
    //         avocado: byppi.values[0].Avocado
    //     }
	// })
	
	// console.log(mappedValues)

	const waffle = d3.select('.waffle')
	const numbers = d3.range(100)

	waffle
		.selectAll('.block')
		.data(numbers)
		.enter()
		.append('div')
		.attr('class', 'block')
		.style('background-color', d => (d < 32 ? '#FE4A49' : '#CCCCCC'))
	
	console.log(byppi)
	console.log(byppi[0].values[0].Hectare)
	console.log(byppi[0].values[0].Cacao)
})
.catch(function(){
	console.log("kut.")
})