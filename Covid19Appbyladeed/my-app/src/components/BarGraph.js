import React from 'react'
import { Bar } from 'react-chartjs-2'
function BarGraph(props) {
const {p}=props

//bargraph to show the statistics of the no:of people affected

const data = {
 labels:p,
  datasets: [{
    label: 'covid 19 cases',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
    return (
        <div className="Bar-graph">
            
            <Bar data={data}
                height={300}
                width={600}
            />
           
        </div>
    )
}

export default BarGraph
