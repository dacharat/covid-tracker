import { ChartTooltipItem, ChartData } from 'chart.js'
import { numberWithCommas } from './utils'
import { ChartComponentProps } from 'react-chartjs-2'

export const chartTooltip = (tooltipItem: ChartTooltipItem, data: ChartData, sumValue = false) => {
  const label = data.datasets[tooltipItem.datasetIndex].label
  const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] as number
  const text = `${label}: ${numberWithCommas(value)}`

  if (sumValue) {
    const total = data.datasets.reduce(
      (acc, cur) => acc + (cur.data[tooltipItem.index] as number),
      0,
    )

    if (tooltipItem.datasetIndex !== data.datasets.length - 1) {
      return text
    } else {
      return [text, `Total: ${numberWithCommas(total)}`]
    }
  } else {
    return text
  }
}

export const createChartProps = (
  data: any,
  stacked = false,
  sumValue = false,
): ChartComponentProps => {
  return {
    data,
    width: 400,
    height: 250,
    options: {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{ stacked: true, ticks: { minRotation: 45 } }],
        yAxes: [{ stacked: true }],
      },
      tooltips: {
        mode: 'label',
        position: 'nearest',
        callbacks: {
          label: (tooltipItem: ChartTooltipItem, data: ChartData) => {
            return chartTooltip(tooltipItem, data, sumValue)
          },
        },
      },
    },
  }
}
