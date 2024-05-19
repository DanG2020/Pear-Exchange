import { useEffect, useState } from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

export default function Giraffe(props: any) {
    const down = (ctx: any, value: any) => ctx.p0.parsed.y >= ctx.p1.parsed.y ? value : undefined;
    const up = (ctx: any, value: any) => ctx.p0.parsed.y <= ctx.p1.parsed.y ? value : undefined;
    let stonkies = props.stonkystonk;
    let stahnk = props.pSim;
    for (let _ = 0; _ < 100; _++) {
        stahnk.update();
    }
    stahnk.init = false;
    const [dataPoint, setData] = useState(stahnk.render().slice(stonkies.r()));
    var chartData = {
        labels: [...Array(101 + Math.floor(stonkies.r())).keys()].slice(1 + stonkies.r()),
        datasets: [
            {
                id: 1,
                data: dataPoint,
                pointRadius: 0,
                pointHoverRadius: 0,
                segment: {
                    borderColor: (ctx: any) => down(ctx, 'rgb(250,5,5)') || up(ctx, 'rgb(5, 250, 5)')
                },
            },
        ],
    }
    useEffect(() => {

    }, [])
    setTimeout(function () {
        stonkies.add()
        stahnk.update()
        setData(stahnk.render().slice(stonkies.r()))
    }, 1000)
    var maxNum = Math.ceil(Math.max(...chartData.datasets[0].data) * 1.1)
    return (
        <Chart
            type='line'
            data={chartData}
            options={{
                maintainAspectRatio: props.chicken,
                animation: {
                    duration: 0
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: Math.floor(Math.min(...chartData.datasets[0].data) * 0.9),
                        max: maxNum
                    },
                }
            }}
        />
    )
}