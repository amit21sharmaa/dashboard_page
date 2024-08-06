import * as React from 'react';
import { BarChart} from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const Graph = () => {
    return(
        <BarChart
      series={[
        { data: [4000, 2000, 5000, 4000, 4000, 2000, 5000, 4000,4000, 2000, 5000, 4000]},
        { data: [2000, 5000, 1000, 3000, 2000, 5000, 1000, 3000,2000, 5000, 1000, 3000,]},
        { data: [4000, 5000, 5000, 5000, 4000, 5000, 5000, 5000,4000, 5000, 5000, 5000,]},
      ]}
      borderRadius={15}
      height={200}
      sx={(theme) => ({
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tick}, .${axisClasses.line}`]: {
            stroke: '#006BD6',
            strokeWidth: 3,
          },
          [`.${axisClasses.tickLabel}`]: {
            fill: '#006BD6',
          },
        },

        border: `1px solid rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1)`,
        backgroundImage: `linear-gradient(rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1) 1px, transparent 1px)`,
        backgroundSize: '35px 35px',
        backgroundPosition: '20px 20px, 20px 20px',
      })}
    />
    )
}

export default Graph;