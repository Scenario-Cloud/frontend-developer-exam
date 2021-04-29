import React from 'react'
import { Card , Grid , Header ,  Image} from 'semantic-ui-react'


const cardItems = [
    { id: '1', img: './item1.png', transactionId: 'DOC0000000223' , label : 'Approved with comments'},
    { id: '2', img: './item2.png', transactionId: 'CORR000000223' , label : 'Approved with comments'},
    { id: '3', img: './item3.png', transactionId: 'SCHED00001996' , label : 'Approved with comments'},
    { id: '4', img: './item4.png', transactionId: 'SI00000000223' , label : 'Approved with comments'},
]

const Approved = () => {
    console.log(cardItems)
    return (
        <div>
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                <Grid.Column>
                    <div className='cardsContainer'>
                        <Header as='h1'>Approved Document</Header>
                        <Card.Group itemsPerRow={4}>
                            {cardItems.map((item) => (
                                <Card>
                                    <Image className='cardImge' src={item.img} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>
                                            {item.transactionId}
                                        </Card.Header>
                                        <Card.Description>
                                            {item.label}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Card.Group>
                    </div>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Approved
