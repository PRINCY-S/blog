import { Component} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-stacked-bar-graph',
  templateUrl: './stacked-bar-graph.component.html',
  styleUrls: ['./stacked-bar-graph.component.scss']
})
export class StackedBarGraphComponent{
  private svg: any;
  public margin = { top: 20, right: 20, bottom: 30, left: 40 };

  public data = [
    { year: "2006", alex: "104", mindy: "152", sean: "90", karen: "162" },
    { year: "2007", alex: "122", mindy: "184", sean: "99", karen: "143" },
    { year: "2008", alex: "50", mindy: "201", sean: "127", karen: "114" },
    { year: "2009", alex: "150", mindy: "134", sean: "139", karen: "80" }
  ];

    //default config
    private width = 500 - this.margin.left - this.margin.right;
    private height = 200 - this.margin.top - this.margin.bottom;

    private _x: any;
    private _y: any;

    private colors = ["#C9D6DF", "#F7EECF", "#E3E1B2", "#F9CAC8"];


    // var svg = d3.select("body")
    // .append("svg")
    // .attr("width", width + margin + 40 )
    // .attr("height", height + margin + 20)
    // .append("g")
    // .attr("transform", "translate(" + (margin+30)/2 +  "," + margin/2 + ")")


      /**
   * Creates an SVG element
   * @param element_id  Element ID Ex : `<div id="bar"></div> ` then element_id will be `div#bar`
   */
  public createSvgStackedBarGraph(): void {
    this.svg = d3
      .select('figure#stacked_bar')
      .append('svg')
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .attr('width', this.width + this.margin.left + this.margin.right)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }

  private drawBars(data: Array<any> ): void {

   const groups =  data.map((d) => d['year'])

    this._x = d3.scaleBand()
    .domain(groups)
    // .rangeRoundBands([0, width], 0.5);

  }
 



 
  ngOnInit(): void {
    this.createSvgStackedBarGraph();
  }


}
