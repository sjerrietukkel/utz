// Select your div
const waffle = d3.select('.waffle')

// Create an array with numbers 0 - 99
const numbers = d3.range(100)

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
waffle
	.selectAll('.block')
	.data(numbers)
	.enter()
	.append('div')
	.attr('class', 'block')
	.style('background-color', d => (d < 32 ? '#FE4A49' : '#CCCCCC'))
	


d3.json("/databron/cleaned_dataset_kit.json").then(function(data) {
	var byppi = d3.nest()
		.key(function(d) { return d.ppi })
		.entries(data)

	// const svg = d3.select(DOM.svg(width, height))
    //   .style("width", "100%")
    //   .style("height", "auto")
	//   .style("font", "10px sans-serif")
	  
	// const leaf = svg.selectAll("g")
	// 	.data(root.leaves())
	// 	.enter().append("g")
	// 	.attr("transform", d => `translate(${d.x0},${d.y0})`)

console.log(byppi)
// console.log(byppi[0].values[0].Cassava)
// console.log(byppi[0].values[0].Cacao)


})


  .catch(function(d){
	  console.log("Hij laadt niet, vriend.")
  })