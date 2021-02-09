import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryTooltip } from 'victory';

export default function SalesChart() {

    const data = [
        {day: 'seg', sales: 1290},
        {day: 'ter', sales: 1130},
        {day: 'qua', sales: 890},
        {day: 'qui', sales: 1328},
        {day: 'sex', sales: 2230},
        {day: 'sab', sales: 3490}
    ]
    return (
        <div>
            <VictoryChart
                
                domainPadding={20}          
            >
                <VictoryBar
                data={data}
                x="day"
                y="sales"
                labels={() =>{"label"}}
                labelComponent={<VictoryLabel active={true} />}
                style={{ data: { fill: "#fc4041" },labels: {fill: "#000"} }}
                

                />
            </VictoryChart>
        </div>
    )
}
