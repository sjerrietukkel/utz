// d3.json("/databron/cleaned_dataset_kit.json").then(function(data) {
// 	var byppi = d3.nest()
// 		.key(function(d) { return d.ppi })
// 		.entries(data)


// 	const waffle = d3.select('.waffle')
// 	const numbers = d3.range(100)

// 	waffle
// 		.selectAll('.block')
// 		.data(numbers)
// 		.enter()
// 		.append('div')
// 		.attr('class', 'block')
// 		.style('background-color', d => (d < byppi[0].values[0].Cacao - 1 ? '#FE4A49'  : '#eeeeee'))
	
// 	console.log(byppi)
// })
// .catch(function(){
// 	console.log("kut.")
// })

d3.csv("/databron/ppi_0_28.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector(".waffle")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(12)
		.gap(3)
		.rows(20)
		.columns(20)
		.rounded(false)();
	}
  });

  // source: http://statshb.capp.ca/SHB/Sheet.asp?SectionID=4&SheetID=265