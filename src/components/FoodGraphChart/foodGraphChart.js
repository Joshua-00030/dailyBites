import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell, Tooltip, Legend } from 'recharts';
//import './foodGraph.css'; // import the CSS file

const FoodGraphChart = ({ className, data }) =>{
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
            width={950}
            height={300}
            data={(d2.length > 0 ? d2 : [{ name: 'empty', value: 1 }])}
        >
            <CartesianGrid strokeDasharray="0 0"/>
            <XAxis dataKey="name"/>
            <YAxis />
            <Bar
                color="#000000"
                dataKey="value"
                nameKey="name"
                animationBegin={0}
                animationDuration={1000}
            >
                {d2.length > 0 ?<>{d2.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={stringToColour(entry.name)}
                    />
                ))}</>: <Cell key='cell-1'fill='#ffffff'/>
                }
            </Bar>
            <Tooltip />
        </BarChart>
        
    )
}

export default FoodGraphChart