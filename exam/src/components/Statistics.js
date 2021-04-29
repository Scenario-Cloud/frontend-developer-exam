import { Icon , Statistic } from 'semantic-ui-react'

const statItems = [
    { key: 'new', label: 'New Documents', value: '100' , icon:'bell'},
    { key: 'delayed', label: 'Delayed Documents', value: '20' , icon:'warning sign'},
    { key: 'attachment', label: 'New Attachements', value: '45' , icon:'attach' },
]

const createStatistic = () => {
    return (
        <Statistic.Group widths='three'>
            {statItems.map((stat) => (
                <Statistic key={stat.key}>
                    <Statistic.Value> {stat.value} <Icon className={stat.icon} name={stat.icon} /></Statistic.Value>
                    <Statistic.Label>{stat.label}</Statistic.Label>
                </Statistic>
            ))}
        </Statistic.Group>
    )
}

const Statistics = () => {

    return (
        createStatistic()
    )
}

export default Statistics;