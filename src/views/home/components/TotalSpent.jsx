import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import Chart from 'react-apexcharts'
import { TitleH2 } from '../../../components/common/Title'

class TotalSpent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    id: 'basic-bar',
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            },
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
            ],
        }
    }

    render() {
        return (
            <Card display={'flex'}>
                <CardHeader>
                    <TitleH2>Weekly Revenue</TitleH2>
                </CardHeader>
                <CardBody>
                    <Chart options={this.state.options} series={this.state.series} type="line" />
                </CardBody>
            </Card>
        )
    }
}

export default TotalSpent
