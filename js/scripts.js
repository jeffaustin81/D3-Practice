var dataset = _.map(_.range(79), function(i) {
  return Math.random() * 50;
});

var w = 400,
  h = 300;

var svg = d3.select('#chartArea').append('svg')
  .attr('width', w)
  .attr('height', h);

var xScale = d3.scale.ordinal()
  .domain(dataset)
  .rangeBands([0, w], 0.2, 0.2);

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset) * 1.1])
  .range([0, h]);

var colorScale = d3.scale.linear()
  .domain([0, dataset.length])
  .range(['#13F2E4', '#2FF24C']);

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', function(d, i) {
    return xScale(d);
  })
  .attr('y', function(d) {
    return h - yScale(d);
  })
  .attr('width', xScale.rangeBand())
  .attr('height', function(d) {
    return yScale(d);
  })
  .attr('fill', function(d, i) {
    return colorScale(i);
  });
