d3.csv("./databron/ppi_0_28.csv", function(err, data) {
	if (err) {
		console.error(err)
	} else {
	  var waffle = new WaffleChart()
		.selector("#waffle")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(45)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });

  d3.csv("./databron/ppi_29_35.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector("#waffle1")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(45)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });

  d3.csv("./databron/ppi_36_43.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector("#waffle2")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(45)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });

  d3.csv("./databron/ppi_44_53.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector("#waffle3")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(45)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });

  d3.csv("./databron/ppi_54_62.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector("#waffle4")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(45)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });

  d3.csv("./databron/ppi_63_98.csv", function(err, data) {
	if (err) {
	  console.error(err);
	} else {
	  var waffle = new WaffleChart()
		.selector("#waffle5")
		.data(data)
		.useWidth(false)
		.label("Cultivated crops in percentages")
		.size(45)
		.gap(3)
		.rows(10)
		.columns(10)
		.rounded(false)();
	}
  });



  // source: http://statshb.capp.ca/SHB/Sheet.asp?SectionID=4&SheetID=265