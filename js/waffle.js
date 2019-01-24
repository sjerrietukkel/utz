// based on a waffle chart made by J. Kunst http://jkunst.com/

var WaffleChart = function() {

    var $_selector,
        $_data,
        $_label,
        $_cellSize,
        $_cellGap,
        $_rows,
        $_columns,
        $_rounded,
        $_keys,
        $_useWidth;
  
    var defaults = {
      size: 6,
      rows: 50,
      columns: 100,
      rounded: false,
      gap: 2
    };
  
    function generatedWaffleChart() {
  
      $_keys = d3.keys($_data[0]);
  
      var obj = {
        selector: $_selector,
        data: $_data,
        label: $_label,
        size: $_cellSize,
        gap: $_cellGap,
        rows: $_rows,
        columns: $_columns,
        rounded: $_rounded
      };
  
      drawWaffleChart(obj);
  
    }
  
    function drawWaffleChart(_obj) {
  
      if (!_obj.size) { _obj.size = defaults.size; }
      if (!_obj.rows) { _obj.rows = defaults.rows; }
      if (!_obj.columns) { _obj.columns = defaults.columns; }
      if (_obj.gap === undefined) { _obj.gap = defaults.gap; }
      if (_obj.rounded === undefined) { _obj.columns = defaults.rounded; }
  
      var formattedData = [];
      var domain = [];
      var value = $_keys[$_keys.length - 1];
      var total = d3.sum(_obj.data, function(d) { return d[value]; });
  
      if ($_useWidth) {
        var forcedWidth = d3.select(_obj.selector).node().getBoundingClientRect().width;
        _obj.columns = Math.floor(forcedWidth / (_obj.size + _obj.gap));
      }
  
      var squareVal = total / (_obj.rows * _obj.columns);
  
      _obj.data.forEach(function(d, i) {
        // console.log(d)
        d[value] = +d[value];
        d.units = Math.floor(d[value] / squareVal);
        Array(d.units + 1).join(1).split('').map(function() {
          formattedData.push({
            crop: d.crop,
            squareVal: squareVal,
            units: d.units,
            value: d[value],
            groupIndex: i
          });
        });
        domain.push(d[$_keys[0]]);
      });
  
      var cacao = "#492F2A"
      var cassave = "#7B574F"
      var maize = "#E6B83A"
      var cocoyam = "#AE6B3E"
      var plantain = "#C28336"
      var pepper = "#EC2833"
      var okra = "#718E66"
      var palm = "#948C42"
      var rice = "#FFFFFF"
      var eggplant = "#5E4249"
      var chili = "#D11515"
      var coconut = "#5B2F16"
      var other = "#AAAAAA"
      var orange = "#FF722D"
      var yam= "#ff9b3b"
      var tomatoes="#ff6347"

  
      // var color = d3.scale.linear()
        // .domain([1, _obj.data.length - 1])
        // .domain ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        // .interpolate(d3.interpolateRgb)
        // .range(["#EC2833", "#718E66", "#D11515", "#5E4249", "#E6B83A", "#AE6B3E", "#C28336"]);
  
      // add label
  
      if (_obj.label) {
        d3.select(_obj.selector)
          .append("div")
          .attr("class", "label")
          .text(_obj.label);
      }
  
      // add legend
  
      var legend = d3.select($_selector)
        .append("div")
        .attr("class", "legend");
  
      var legendItem = legend.selectAll("div")
        .data(_obj.data);
  
      legendItem.enter()
        .append("div")
        .attr("class", function(d, i) {
          return "legend_item legend_item_" + (i + 1);
        });
  
      var legendIcon = legendItem.append("div")
        .attr("class", "legend_item_icon")
        .style("background-color", function(d) {
          // console.log(d.crop)
          if (d.crop=="cacao") {
              return cacao
          }
          else if(d.crop=="cassave") {
            return cassave;
          }

          else if(d.crop=="maize") {
            return maize;
          }

          else if (d.crop== "cocoyam") {
            return cocoyam;
          }

          else if (d.crop=="plantain") {
            return plantain;
          }
          else if (d.crop=="pepper") {
            return pepper;
          }
          else if (d.crop=="okra") {
            return okra;
          }

          else if (d.crop=="palm") {
            return palm;
          }

          else if (d.crop=="rice") {
            return rice;
          }

          else if (d.crop=="eggplant") {
            return eggplant;
          }

          else if (d.crop=="chili") {
            return chili;
          }

          else if (d.crop=="orange") {
            return orange;
          }

          else if (d.crop=="coconut") {
            return coconut;
          }

          else if (d.crop=="other"){
            return other;
          }

          // if (i === 0) {
            
          //   return red;
          // }
          //  else {
          //   return color(i);
          // }
        });
  
      if (_obj.rounded) {
        legendIcon.style("border-radius", "50%");
      }
  
      legendItem.append("span")
        .attr("class", "legend_item_text")
        .text(function(d) { return d[$_keys[0]]; });
  
      // set up dimensions
  
      var width = (_obj.size * _obj.columns) + (_obj.columns * _obj.gap) - _obj.gap;
      var height = (_obj.size * _obj.rows) + (_obj.rows * _obj.gap) - _obj.gap;
  
      if ($_useWidth) {
        width = d3.select(_obj.selector).node().getBoundingClientRect().width;
      }
  
      var svg = d3.select(_obj.selector)
        .append("svg")
        .attr("class", "waffle")
        .attr("width", width)
        .attr("height", height);
  
      var g = svg.append("g")
        .attr("transform", "translate(0,0)");
  
      var item = g.selectAll(".unit")
        .data(formattedData);
  
      item.enter()
        .append("rect")
        .attr("class", "unit")
        .attr("width", _obj.size)
        .attr("height", _obj.size)
        .attr("fill", function(d) {
          console.log(d)
        if (d.crop=="cacoa") {
            return cacao;
        }
        else if(d.crop=="cassava") {
          return cassave;
        } 
        else if(d.crop=="maize") {
          return maize;
        }
        else if (d.crop== "cocoyam") {
          return cocoyam;
        }
        else if (d.crop=="plantain") {
          return plantain;
        }
        else if (d.crop=="pepper") {
          return pepper;
        }
        else if (d.crop=="okra") {
          return okra;
        }
        else if (d.crop=="palm") {
          return palm;
        }
        else if (d.crop=="rice") {
          return rice;
        }
        else if (d.crop=="tomatoes"){
          return tomatoes
        }
        else if (d.crop=="eggplant") {
          return eggplant;
        }
        else if (d.crop=="oranges") {
          return orange;
        }
        else if (d.crop=="yam") {
          return yam;
        }
        else if (d.crop=="chili") {
          return chili;
        }
        else if (d.crop=="coconut") {
          return coconut;
        }
        else if (d.crop=="other"){
          return other;
        }


          // if (d.crop=="cacao") {
          //   return brown;
          // }
          // else if(d.crop=="cassave") {
          //   return groenig;
          // }
          
          // else {
          //   return color(d.groupIndex);
          // }
        })
        .attr("x", function(d, i) {
          var col = Math.floor(i / _obj.rows);
          return (col * (_obj.size)) + (col * _obj.gap);
        })
        .attr("y", function(d, i) {
          var row = i % _obj.rows;
          return (_obj.rows * (_obj.size + _obj.gap)) - ((row * _obj.size) + (row * _obj.gap)) - _obj.size - _obj.gap;
        })
        .attr("rx", "4px")
        .attr("ry", "4px")
        .append("title")
        .text(function (d, i) {
          return _obj.data[d.groupIndex][$_keys[0]] + ": " + Math.round((d.units / formattedData.length) * 100) + "%";
        });
  
      if (_obj.rounded) {
        item
          .attr("rx", (_obj.size / 2))
          .attr("ry", (_obj.size / 2));
      }
  
      // rect.append("text")
      //   .text(function(d) { return d.crop })
      //   .style("text-anchor", "middle")
      //   .style("font-family", "Arial, Helvetica, sans-serif")
      //   .style("font-size", "12px")
    }
  
    generatedWaffleChart.selector = function(value){
      if (!arguments.length) { return $_selector; }
      $_selector = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.data = function(value){
      if (!arguments.length) { return $_data; }
      $_data = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.useWidth = function(value){
      if (!arguments.length) { return $_useWidth; }
      $_useWidth = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.label = function(value){
      if (!arguments.length) { return $_label; }
      $_label = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.size = function(value){
      if (!arguments.length) { return $_cellSize; }
      $_cellSize = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.gap = function(value){
      if (!arguments.length) { return $_cellGap; }
      $_cellGap = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.rows = function(value){
      if (!arguments.length) { return $_rows; }
      $_rows = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.columns = function(value){
      if (!arguments.length) { return $_columns; }
      $_columns = value;
      return generatedWaffleChart;
    }
  
    generatedWaffleChart.rounded = function(value){
      if (!arguments.length) { return $_rounded; }
      $_rounded = value;
      return generatedWaffleChart;
    }
  
    return generatedWaffleChart;
  
  };