import React, {Component} from "react";
import CanvasJS from '../../canvasjs.min';
import "./Graph2D.css";


class Graph2D extends Component {

    componentDidMount() {
        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text:"Fortune Global 500 Companies by Country"
            },
            animationEnabled: true,
           
            data: [
            {     
                type: "bar",
                dataPoints: [
                  {y: 5, label: "Sweden"  },
                  {y: 6, label: "Taiwan"  },
                  {y: 7, label: "Russia"  },
                  {y: 8, label: "Spain"  },
                  {y: 8, label: "Brazil"  },
                  {y: 8, label: "India"  },
                  {y: 9, label: "Italy"  },
                  {y: 9, label: "Australia"  },
                  {y: 12, label: "Canada"  },
                  {y: 13, label: "South Korea"  },
                  {y: 13, label: "Netherlands"  },
                  {y: 15, label: "Switzerland"  },
                  {y: 28, label: "Britain" },
                  {y: 32, label: "Germany"   },
                  {y: 32, label: "France"  },
                  {y: 68, label: "Japan"   },
                  {y: 73, label: "China"},
                  {y: 132, label: "US" }
                ]
            }

            ]
        });
    chart.render();
  }
  render() {
    return (
      <div id="chartContainer" style={{height: 450 + "px", width: 100 + "%"}}>
      </div>
    );
  }

}
    
export default Graph2D;