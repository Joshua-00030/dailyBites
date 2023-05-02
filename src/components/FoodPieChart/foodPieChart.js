import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
const FoodPieChart = ({ className, data, view, units }) => {
   
    const d = {}
    const d2 = []
    const nutrientValue = {}
    const nutrientData = []
    const selection = [d2,nutrientData]
    var total = 0
    const f = (n) =>{
        return units.find(x =>x.name === n)
    }

    if (data) {
        data.forEach((item) => {
            if (d.hasOwnProperty(item.name)) {
                d[item.name] = d[item.name] += item.nutrition[0].value
            } else {
                d[item.name] = item.nutrition[0].value
            }
                total += item.nutrition[0].value
                item.nutrition.slice(1).forEach((nutrient) =>{
                    if (nutrientValue.hasOwnProperty(nutrient.name)) {
                        nutrientValue[nutrient.name] = nutrientValue[nutrient.name] += nutrient.value
                    } else {
                        nutrientValue[nutrient.name] = nutrient.value
                    }

                })
            })
            for (var nutrient in nutrientValue) {
                nutrientData.push({ name: nutrient, value: nutrientValue[nutrient], unit: f(nutrient).unit })
        }
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
                    {selection[view].length > 0 ?
                    <>
                    {view === '0' ?
                    <>
                    <label>{`${payload[0].name} : ${(payload[0].value / total * 100).toFixed(2)}%`}</label><br />
                    <label>{`Calories : ${payload[0].value}`}</label>
                    </>
                    :
                    <label>{`${payload[0].name} : ${payload[0].value} ${payload[0].payload.unit}`}</label>
        }
                </>
                :<label>{`No data for date range`}</label>}
                </div>
            );
        }
        return null;
    }

    const width = window.innerWidth - 90;
    return (
        <PieChart width={width} height={300}>
            <Pie
                data={(selection[view].length > 0 ? selection[view] : [{ name: 'empty', value: 1 }])}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                animationBegin={0}
                animationDuration={1000}
                outerRadius={120}
                fill="#8884d8"
            >
                {selection[view].length > 0 ?<>{selection[view].map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={stringToColour(entry.name)}
                    />
                ))}</>: <Cell key='cell-1'fill='#ffffff'/>
}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Legend />
        </PieChart>
    )
}

export default FoodPieChart