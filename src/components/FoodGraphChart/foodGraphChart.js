import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip} from 'recharts';

const FoodGraphChart = ({ className, data }) => {
    const d = {}
    const d2 = []
    var total = 0

    if (data) {
        data.forEach((item) => {
            if (d.hasOwnProperty(item.name)) {
                d[item.name] = d[item.name] += item.nutrition[0].value
            } else {
                d[item.name] = item.nutrition[0].value
            }
            total += item.nutrition[0].value
        })
        for (var item in d) {
            d2.push({ name: item, value: d[item] })
        }
    }

    // Changes the position of the labels under the X-axis
    // Every other label will appear in a "new line"
    const CustomTick = ({ x, y, payload, index }) => {
        if (index % 2 === 0) {
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={10} textAnchor="middle" fill="#666">
                        {payload.value}
                    </text>
                </g>
            )
        }

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={25} textAnchor="middle" fill="#666">
                    {payload.value}
                </text>
            </g>
        )
    }


    const stringToColour = (str) => {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }

    return (
        <BarChart
            width={1000}
            height={350}
            data={(d2.length > 0 ? d2 : [{ name: 'empty', value: 1 }])}
        >
            <XAxis dataKey="name" interval={0} tick={< CustomTick />} />
            <YAxis />
            <Bar
                color="#000000"
                dataKey="value"
                nameKey="name"
                animationBegin={0}
                animationDuration={1000}
            >
                {d2.length > 0 ? <>{d2.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={stringToColour(entry.name)}
                    />
                ))}</> : <Cell key='cell-1' fill='#ffffff' />
                }
            </Bar>
            <Tooltip />
        </BarChart>

    )
}

export default FoodGraphChart