import { Component, OnInit } from "@angular/core";

const data = {
  chart: {
    caption: "ISP Routing Path",
    xaxisminvalue: "0",
    xaxismaxvalue: "100",
    yaxisminvalue: "0",
    yaxismaxvalue: "100",
    theme: "gammel",
    basefontsize: "11",
    plothovereffect: "0"
  },
  dataset: [
    {
      data: [
        {
          id: "isp",
          x: "80",
          y: "83",
          alpha: "0",
          name: "ISP",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "50",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/k0pea9uw5/globe.png"
        },
        {
          id: "modem",
          x: "55",
          y: "83",
          alpha: "0",
          label: "Modem",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "30",
          imagewidth: "40",
          imageurl: "https://s8.postimg.cc/3qz87kmut/electronics.png"
        },
        {
          id: "router",
          x: "45",
          y: "65",
          alpha: "0",
          name: "Master Router",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/io7p89uut/router.png"
        },
        {
          id: "subrouter1",
          x: "20",
          y: "55",
          alpha: "0",
          name: "Sub Router 1",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/io7p89uut/router.png"
        },
        {
          id: "subrouter2",
          x: "75",
          y: "45",
          alpha: "0",
          name: "Sub Router 2",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/io7p89uut/router.png"
        },
        {
          id: "subrouter3",
          x: "40",
          y: "45",
          alpha: "0",
          name: "Sub Router 3",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/io7p89uut/router.png"
        },
        {
          id: "desktop-srouter1",
          x: "10",
          y: "30",
          alpha: "0",
          name: "Public Desktop",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/b9idg2911/multimedia.png"
        },
        {
          id: "nas-srouter1",
          x: "10",
          y: "65",
          alpha: "0",
          name: "Network Storage",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "20",
          imagewidth: "30",
          imageurl: "https://s8.postimg.cc/mymd3sfcl/nas.png"
        },
        {
          id: "mobile1-srouter2",
          x: "65",
          y: "20",
          alpha: "0",
          label: "Ronnie's Mobile",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "30",
          imagewidth: "15",
          imageurl: "https://s8.postimg.cc/ec4ebmm0l/image.png"
        },
        {
          id: "mobile2-srouter2",
          x: "90",
          y: "25",
          alpha: "0",
          label: "Julliet's Mobile",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "30",
          imagewidth: "15",
          imageurl: "https://s8.postimg.cc/ec4ebmm0l/image.png"
        },
        {
          id: "laptop1-srouter2",
          x: "80",
          y: "15",
          alpha: "0",
          name: "Romeo's Laptop",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "45",
          imagewidth: "60",
          imageurl: "https://s8.postimg.cc/qd94xq5at/new_laptop.png"
        },
        {
          id: "st-srouter3",
          x: "30",
          y: "20",
          alpha: "0",
          name: "Smart TV",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/wbmy7t3n9/image.png"
        },
        {
          id: "desktop-srouter3",
          x: "45",
          y: "15",
          alpha: "0",
          name: "Amy's Desktop",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "40",
          imagewidth: "50",
          imageurl: "https://s8.postimg.cc/b9idg2911/multimedia.png"
        },
        {
          id: "mobile-srouter3",
          x: "55",
          y: "35",
          alpha: "0",
          label: "Amy's Mobile",
          radius: "60",
          shape: "CIRCLE",
          imagenode: "1",
          imagealign: "MIDDLE",
          imageheight: "30",
          imagewidth: "15",
          imageurl: "https://s8.postimg.cc/ec4ebmm0l/image.png"
        }
      ]
    }
  ],
  connectors: [
    {
      stdthickness: "2",
      connector: [
        {
          from: "isp",
          to: "modem",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "modem",
          to: "router",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "router",
          to: "subrouter1",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "router",
          to: "subrouter2",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "router",
          to: "subrouter3",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter1",
          to: "desktop-srouter1",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter1",
          to: "nas-srouter1",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter2",
          to: "mobile1-srouter2",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter2",
          to: "mobile2-srouter2",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter2",
          to: "laptop1-srouter2",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter3",
          to: "st-srouter3",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter3",
          to: "desktop-srouter3",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "subrouter3",
          to: "mobile-srouter3",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.css']
})
export class NetworkChartComponent implements OnInit {
  width = "600";
  height = "400";
  type = "dragnode";
  dataFormat = "json";
  dataSource = data;

  constructor() {}

  ngOnInit() {
  }
}
