import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
const WeightGraph = ({ data }) => {
    const test  = data !== null && data.length > 0
    if(!test){
        return
    }
    const min =     test ? data.reduce((prev, curr) => prev.weight < curr.weight ? prev : curr).weight : null
    const minTime = test ? data.reduce((prev, curr) => prev.date < curr.date ? prev : curr).date : null
    const time =    test ? data.map(d => new Date(d.date).getTime()) : null
    const newData = time !== null ? time.map(function (m, i) { return { date: m, weight: data[i].weight, legend: data[i].date.split('T')[0] } }) : null

    const CustomTick = ({ x, y, payload, index }) => {
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={10} textAnchor="middle" fill="#666">
                    {new Date(payload.value).toISOString().split('T')[0]}
                </text>
            </g>
        )
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            console.log(payload)
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{payload[0].name}: {new Date(payload[0].value).toISOString().split('T')[0]}</label>
                    <br />
                    <label>{payload[1].name}: {payload[1].value} lbs</label>
                </div>
            );
        }
        return null;
    }
    const height = 64;
    const bmiData = newData.map( (entry) => 
            ({ 
                date: entry.date,
                bmi: (703 * entry.weight / (height * height) )
            })
    
    )
    console.log(bmiData)

    return (
        <ResponsiveContainer width="80%" height="100%">
            <ScatterChart
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="date" name="Date" unit="seconds" domain={[minTime, 'auto']} tick={< CustomTick payload={newData} />} />
                <YAxis yAxisId="left" type="number" dataKey="weight"
                 name="Weight" unit=" lbs" domain={[min / 1.02, 'auto']} />
                <YAxis yAxisId="right" type="number" dataKey="bmi" 
                name="BMI" unit="BMI" orientation="right" domain={[min / 1.02, 'auto']} />
                <ZAxis type="number" range={[100]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                <Scatter yAxisId="left" name="Weight" data={newData} fill="#82ca9d"
                    lineJointType='monotoneX' line shape="diamond" />
                <Scatter yAxisId="right" name="BMI" data={bmiData} fill="#0096FF"
                    lineJointType='monotoneX' line shape="diamond" />
                    <Legend />
            </ScatterChart>
        </ResponsiveContainer>
    );

}

export default WeightGraph