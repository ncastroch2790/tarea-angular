import { Component, OnInit } from "@angular/core";
declare var require: any;
import * as Highcharts from "highcharts";
require("highcharts/modules/networkgraph")(Highcharts);

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  Highcharts = Highcharts; // required
  chartConstructor = "chart"; // optional string, defaults to 'chart'
  series: any = [];
  nodes: any = [];

  chartCallback = ( chart: any ) => {
    let highChart: any = Highcharts;
      Highcharts.addEvent(Highcharts.Series, "afterSetOptions", (e: any) => {
        let colors: any = Highcharts.getOptions().colors,
          i = 0,
          
          nodes: any = {};


        if (
          this instanceof highChart.seriesTypes.networkgraph &&
          e.options.id === "network-budget"
        ) {
          e.options.data.forEach((link:any)=> {
            if (link[0] === 'Total Receipt') {
              
              nodes['Total Receipt'] = {
                id: "Total Receipt",
                marker: {
                  radius: 50
                }
              };
              
              nodes[link[1]] = {
                id: link[1],
                marker: {
                  radius: 10
                },
                color: colors[i++]
              };
            } else if (nodes[link[0]] && nodes[link[0]].color) {
              nodes[link[1]] = {
                id: link[1],
                color: nodes[link[0]].color
              };
            }
          });
          e.options.nodes = Object.keys(nodes).map((id)=> {
            return nodes[id];
          });
        }
      });
        chart.series[0].update({})
  }; // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false;
  constructor() {}

  ngOnInit() {
    Highcharts.setOptions({
      plotOptions: {
        series: {
          animation: {
            duration: 0
          }
        }
      }
    });
  }
  chartOptions: any = {
    chart: {
      type: "networkgraph"
      // plotBorderWidth: 1
    },
    title: {
      text: "Budget Profile for the year 2020-21"
    },
    subtitle: {
      text: "State budget visualisation"
    },
     credits: {
      enabled: false
    },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to"]
      },
      series: {
        animation: false
      }
    },
    animation: false,
    //     tooltip: {
    //     formatter: function() {
    //         return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series '+ this.series.name;
    //     }
    // },
    series: [
      {
        layoutAlgorithm: {
          enableSimulation: true,
          initialPositions: ()=> {
            let chart = this.series[0].chart,
              width = chart.plotWidth,
              height = chart.plotHeight;

            this.nodes.forEach((node: any) => {
              // If initial positions were set previously, use that
              // positions. Otherwise use random position:
              node.plotX =
                node.plotX === undefined ? Math.random() * width : node.plotX;
              node.plotY =
                node.plotY === undefined ? Math.random() * height : node.plotY;
            });
          }
        },
        dataLabels: {
          enabled: true,
          textPath: {
            enabled: false
          },
          linkFormat: "",
          allowOverlap: true
        },
        link: {
          width: 5,
          color: "#cccccc"
        },
        id: "network-budget",
        draggable: false,
        data: [
          ["Total Receipt", "Total Budgetary Expenditure"],
          ["Total Receipt", "Total Draw-Down Cash Balance"],
          ["Total Receipt", "Total Capital Receipt"],
          ["Total Receipt", "Total Revenue Receipt"],
          ["Total Revenue Receipt", "Total Tax Revenue Receipt"],
          ["Total Revenue Receipt", "Total Non-Tax Revenue Receipt"],
          ["Total Capital Receipt", "Total Debt Receipt"],
          ["Total Capital Receipt", "Total Non-Debt Receipt"],
          ["Total Budgetary Expenditure", "Total Revenue Expenditure"],
          ["Total Budgetary Expenditure", "Total Capital Expenditure"],
          ["Total Capital Expenditure", "Total Loan and Interest Expenditure"],
          ["Total Capital Expenditure", "Foo Expenditure"],
          ["Total Revenue Expenditure", "Foo2 Expenditure"],
          ["Total Revenue Expenditure", "Foo1 Expenditure"]
        ]
      }
    ]
  };
}