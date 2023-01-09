import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
  private svg: any;
  public margin = { top: 20, right: 20, bottom: 30, left: 40 };

  public data = [
    { group: 'Jan', '2023': 64678, '2022': 45765 },
    { group: 'Feb', '2023': 15067, '2022': 38854 },
    { group: 'Mar', '2023': 62367, '2022': 28959 },
    { group: 'Apr', '2023': 27656, '2022': 58644 },
    { group: 'May', '2023': 21445, '2022': 24673 },
    { group: 'Jun', '2023': 51445, '2022': 14673 },
    { group: 'Jul', '2023': 31445, '2022': 34673 },
    { group: 'Aug', '2023': 11445, '2022': 64673 },
  ];

  public bar_data = [
    { group: 'Jan 22', amt: 64 },
    { group: 'Feb 22', amt: 150 },
    { group: 'Mar 22', amt: 62 },
    { group: 'Apr 22', amt: 276 },
    { group: 'May 22', amt: 21 },
    { group: 'Jun 22', amt: 51 },
    { group: 'Jul 22', amt: 314 },
    { group: 'Aug 22', amt: 114 },
  ];

  public line_data = [
    { group: 'Jan 22', amount: 3 },
    { group: 'Feb 22', amount: 2 },
    { group: 'Mar 22', amount: 4 },
    { group: 'Apr 22', amount: 1 },
    { group: 'May 22', amount: 4 },
    { group: 'Jul 22', amount: 1 },
    { group: 'Aug 22', amount: 5 },
  ];

  //default config
  private width = 500 - this.margin.left - this.margin.right;
  private height = 200 - this.margin.top - this.margin.bottom;

  private _x0: any;
  private _x1: any;
  private _y: any;
  private _y1: any;
  

  public createSvgCompareGraph(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .attr('width', this.width + this.margin.left + this.margin.right)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
    // this.width = parseInt(d3.select(element_id).style('width'), 10) - this.margin.left - this.margin.right;
    // d3.select(`${element_id} svg`).attr('width', this.width + this.margin.left + this.margin.right);
  }

  public createSvgBarLineGraph(): void {
    this.svg = d3
      .select('figure#barLine')
      .append('svg')
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .attr('width', this.width + this.margin.left + this.margin.right)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
    // this.width = parseInt(d3.select(element_id).style('width'), 10) - this.margin.left - this.margin.right;
    // d3.select(`${element_id} svg`).attr('width', this.width + this.margin.left + this.margin.right);
  }

  private drawBars(data: Array<any>): void {
    //  const subgroups = data.slice(1)
    const subgroups = Object.keys(data[0]).slice(0);

    const groups = data.map((d) => d['group']);

    //set the Range
    this._x0 = d3
      .scaleBand()
      .range([0, this.width])
      .domain(groups)
      .padding(0.2);
    this._x1 = d3
      .scaleBand()
      .domain(subgroups)
      .range([0, this._x0.bandwidth()]);
    this._y = d3.scaleLinear().range([this.height, 0]).domain([0, 60000]);

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
      .call(d3.axisBottom(this._x0).tickSize(0))
      .style('stroke-opacity', 0.2)
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('opacity', 0.5);

    // Draw the Y-axis on the DOM
    this.svg
      .append('g')
      .call(
        d3
          .axisLeft(this._y)
          .tickFormat(function (d: number) {
            return '$' + d3.format('.1s')(d);
          } as any)
          .tickArguments([4])
      )
      .attr('stroke-width', 0)
      .style('opacity', 0.5);

    //color palette
    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(['	#000000', '	#CBC3E3']);

    this.svg
      .append('g')
      .selectAll('g')
      // Enter in data = loop group per group

      .data(data)
      .join('g')
      .attr('transform', (d: any) => `translate(${this._x0(d.group)}, 0)`)
      .selectAll('rect')
      .data(function (d: any) {
        return subgroups.map(function (key) {
          return { key: key, value: d[key] };
        });
      })
      .join('rect')
      .attr('x', (d: any) => this._x1(d.key))
      .attr('y', (d: any) => this._y(d.value))
      .attr('width', this._x1.bandwidth())
       .attr('height', (d: any) => this.height - this._y(d.value))
      .attr('fill', (d: any) => color(d.key))
     .attr('cursor', 'pointer')
      // no bar at the beginning thus:
      // .attr('height', (d: any) => this.height - this._y(0)) // always equal to 0
      // .attr('y', (d: any) => this._y(0))
   
    // .transition()
    // .duration(800)
    // .attr('y', (d: any) => this._y(d.Value))
    // .attr('height', (d: any) => this.height - this._y(d.Value))
    // .delay(function(d:any,i:any){return (i*100);})


    // Animation
// this.svg.selectAll("rect")

// .transition()
// .duration(800)
// .attr('y', (d: any) => this._y(d.Value))
// .attr('height', (d: any) => this.height - this._y(d.Value))
// .delay(function(d:any,i:any){return (i*100);})
    
   
  }

  private drawBarsAndLines(bar_data: Array<any>, line_data: Array<any>): void {
    const bar_groups = bar_data.map((d) => d['group']);
    const line_groups = line_data.map((d) => d['group']);

    //set the Range
    this._x0 = d3
      .scaleBand()
      .range([0, this.width])
      .domain(bar_groups)
      .padding(0.2);

    this._y = d3.scaleLinear().range([this.height, 0]).domain([0, 400]);

    this._y1 = d3.scaleLinear().range([this.height, 0]).domain([0, 5]);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this._x0).tickSize(0))
      .style('stroke-opacity', 0.2)
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('opacity', 0.5);

    // Draw the Y-axis on the DOM for Bar
    this.svg
      .append('g')
      .call(d3.axisLeft(this._y).tickPadding(0).tickArguments([4]))
      .attr('stroke-width', 0)
      .style('opacity', 0.5);

    // Draw the Y-axis on the DOM for Line
    this.svg
      .append('g')
      .call(d3.axisRight(this._y1).tickArguments([5]))
      .attr('stroke-width', 0)
      .style('opacity', 0.5);

    //color palette
    const color1 = d3.scaleOrdinal().domain(bar_groups).range(['#000000']);

    const color2 = d3.scaleOrdinal().domain(line_groups).range(['#CBC3E3']);

    this.svg
      .append('g')
      .selectAll('g')
      // Enter in data = loop group per group

      .data(bar_data)
      .join('g')
      .attr('transform', (d: any) => `translate(${this._x0(d.group)}, 0)`)
      .selectAll('rect')
      .attr('x', (d: any) => this._x0(d.group))
      .attr('y', (d: any) => this._y(d.amt))
      .attr('width', this._x0.bandwidth())
      .attr('height', (d: any) => this.height - this._y(d.amt))
      .attr('fill', (d: any) => color1(d.group))
      .attr('cursor', 'pointer');
  }

  ngOnInit(): void {
    this.createSvgCompareGraph();
    this.drawBars(this.data);
    // this.createSvgBarLineGraph();
    // this.drawBarsAndLines(this.bar_data, this.line_data);
  }
}
