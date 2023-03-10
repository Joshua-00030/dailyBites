import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
const FoodPieChart = ({ className, data }) => {
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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    {d2.length > 0 ?
                    <>
                    <label>{`${payload[0].name} : ${(payload[0].value / total * 100).toFixed(2)}%`}</label><br />
                    <label>{`Calories : ${payload[0].value}`}</label>
                </>
                :<label>{`No data for date range`}</label>}
                </div>
            );
        }
        return null;
    }

    return (
        <PieChart width={730} height={300}>
            <Pie
                data={(d2.length > 0 ? d2 : [{ name: 'empty', value: 1 }])}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
            >
                {d2.length > 0 ?<>{d2.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={stringToColour(entry.name)}
                    />
                ))}</>: <Cell key='cell-1'fill='#ffffff'/>
}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
        </PieChart>
    )
}

export default FoodPieChart