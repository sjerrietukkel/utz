d3.csv("/databron/ppi_0_28.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector(".waffle")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(27.5)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });

  // source: http://statshb.capp.ca/SHB/Sheet.asp?SectionID=4&SheetID=265