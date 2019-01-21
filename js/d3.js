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

d3.csv("./testdata.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector(".waffle")
		.data(data)
		.useWidth(false)
		.label("Value of producers' sales in 2013, in thousands of dollars")
		.size(12)
		.gap(2)
		.rows(20)
		.columns(50)
		.rounded(true)();
	}
  });

  // source: http://statshb.capp.ca/SHB/Sheet.asp?SectionID=4&SheetID=265

// d3.csv("/databron/cleaned_dataset_kit.csv").then(function(data) {
// 	  var waffle = new WaffleChart()
// 		.selector("#waffle")
// 		.data(data)
// 		.useWidth(false)
// 		.label("Kit")
// 		.size(12)
// 		.gap(2)
// 		.rows(20)
// 		.columns(50)
// 		.rounded(true)();

// 		console.log(waffle)
//   })
  // source: http://statshb.capp.ca/SHB/Sheet.asp?SectionID=4&SheetID=265