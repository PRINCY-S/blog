import { Component } from '@angular/core';
import {  csv } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss'],
})
export class OpportunitiesComponent {//
  private svg: any;
  public margin = { top: 20, right: 20, bottom: 30, left: 40 };
 

  public data = [
    { group: 'Sep 11', 'amount': 32 },
    { group: 'Sep 12',  'amount': 21  },
    { group: 'Sep 13',  'amount': 40  },
    { group: 'Sep 14',  'amount': 10   },
    { group: 'Sep 15',   'amount': 45 },
    { group: 'Sep 16',  'amount': 10 },
    { group: 'Sep 17',  'amount':  50 },
    
  ];

  //default config
  private width = 500 - this.margin.left - this.margin.right;
  private height = 200 - this.margin.top - this.margin.bottom;

  private _x: any;
  private _y: any;

 

  /**
   * Creates an SVG element
   * @param element_id  Element ID Ex : `<div id="bar"></div> ` then element_id will be `div#bar`
   */
  public createSvgLineGraph(): void {
    this.svg = d3
      .select('figure#line')
      .append('svg')
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .attr('width', this.width + this.margin.left + this.margin.right)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
   
  }


  private drawBars(data: Array<any>): void {
    //  const subgroups = data.slice(1)
    const subgroups = Object.keys(data[0]).slice(0);

    const groups = data.map((d) => d['group']);

    //set the Range
    this._x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(groups);
      this._y = d3.scaleLinear().range([this.height, 0]).domain([0, 50]);
     


      

    //add tool tip

    // var tooltip = d3
    //   .select('body')
    //   .append('div')
    //   .style('position', 'absolute')
    //   .style('z-index', '10')
    //   .style('visibility', 'hidden')
    //   .text('a simple tooltip');

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this._x).tickSize(0))
      .style('stroke-opacity', 0.2)
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('opacity', 0.5);

     // Draw the Y-axis on the DOM
     this.svg
      .append('g')
      .call(
        d3.axisLeft(this._y).tickFormat(function (d: number) {
          return '$' + d3.format('.1s')(d);
        } as any).tickArguments([4])
      )
      
      .attr('stroke-width', 0)
      .style('opacity', 0.5);

    

  
// Shadow effect
const defs = this.svg.append('defs');
const filter = defs.append('filter').attr('id', 'shadow');
filter
  .append('feOffset')
  .attr('in', 'SourceGraphic')
  .attr('dx', 0)
  .attr('dy', 20)
  .attr('result', 'offOut');
filter
  .append('feGaussianBlur')
  .attr('in', 'offOut')
  .attr('stdDeviation', 10)
  .attr('result', 'blurOut');
filter
  .append('feBlend')
  .attr('in', 'SourceGraphic')
  .attr('in2', 'blurOut')
  .attr('mode', 'normal');

const grad = defs
  .append('linearGradient')
  .attr('id', 'grad')
  .attr('x1', '0%')
  .attr('x2', '0%')
  .attr('y1', '0%')
  .attr('y2', '100%')
  .attr('gradientTransform', 'rotate(-45)');

var colors = [
  ['rgb(173, 76, 49)', '0.5'],
  ['rgb(196, 71, 39)', '0'],
  //['rgb(70,130,180)', '0'],
];

grad
  .selectAll('stop')
  .data(colors)
  .enter()
  .append('stop')
  .style('stop-color', function (d:any) {
    return d[0];
  })
  .style('stop-opacity', function (d:any) {
    return d[1];
  })
  .attr('offset', function (d:any, i:any) {
    return 100 * (i / (colors.length - 1)) + '%';
  });


      // define the line
      const valueline = d3.line()
      .x((d: any) => this._x(d.group))
      .y((d: any) => this._y(d.amount))
      .curve(d3.curveMonotoneX);

     //define the area
      var area = d3
      .area()
      .x((d: any) => this._x(d.group))
      .y0(this.height)
      .y1((d: any) => this._y(d.amount))
      .curve(d3.curveMonotoneX);


    const path = this.svg
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', '#cc7000')
    .attr('stroke-width', '2px')
    .style('filter', 'url(#shadow)')
    .attr('d', valueline(data));

  this.svg.append('path')
    .attr('class', 'area')
    .attr('d', area(data))
    .attr('fill', 'url(#grad');

    
      // Transition
      const totalLength = path.node().getTotalLength();
      path
        .attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength);
      path.transition().duration(5000).attr('stroke-dashoffset', 0);
    
  }

  ngOnInit(): void {
    this.createSvgLineGraph();
    this.drawBars(this.data);
  }
}


