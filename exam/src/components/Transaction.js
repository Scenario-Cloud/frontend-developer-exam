import React from 'react'
import { Grid , List , Header } from 'semantic-ui-react'

const transItems = [
    { id: '1', type:'inprogress', label: 'Memo for work schedule changes', transactionId: 'CORR000000223'},
    { id: '2', type:'inprogress', label: 'Memo for recent change on work attire', transactionId: 'CORR000000224'},
    { id: '3', type:'pending', label: 'Request to review recent plan changes', transactionId: 'RFI000008900'},
    { id: '4', type:'inprogress', label: 'Letter for Department Head (III)', transactionId: 'CORR000000225'},
    { id: '5', type:'pending', label: 'Request Information for ABP Tower II', transactionId: 'RFI000008901'},
    { id: '6', type:'inprogress', label: 'Letter for Structural Team', transactionId: 'CORR000000226'},
    { id: '7', type:'pending', label: 'Request Information re:PA Building', transactionId: 'RFI000008902'},
    { id: '8', type:'pending', label: 'Request to review recent schedule changes', transactionId: 'RFI000008903'},
]

const inProgress = transItems.filter(tran =>{
    if (tran.type === 'inprogress') {
        console.log('a',tran);
        return tran
    } else {
        return ''
    }
})

const pending = transItems.filter(tran =>{
    if (tran.type === 'pending') {
        console.log('a',tran);
        return tran
    } else {
        return ''
    }
})

const striped = (a) => {
    console.log(a);
    if (a %2 ) {
        return ''
    } else {
        return 'stripe'
    }

}

const Transaction = () => {
    console.log(pending);
    return (
        <Grid stackable columns={2} >
            <Grid.Row>
            <Grid.Column className='transactionContainer'>
                <List  className='listContainerInProgress' divided relaxed>
                <Header as='h1'>In Progress</Header>
                {inProgress.map((transItems , index) => (
                    <List.Item key={transItems.id} className={striped(index)}>
                    <List.Content>
                        <List.Description as='p'>{transItems.transactionId}-{transItems.label}</List.Description>
                    </List.Content>
                    </List.Item>
                ))}
                </List>
            </Grid.Column>
            <Grid.Column className='transactionContainer'>
            <List  className='listContainerPending' divided relaxed>
                <Header as='h1'>In Progress</Header>
                {pending.map((transItems , index) => (
                    <List.Item key={transItems.id} className={striped(index)}>
                    <List.Content>
                        <List.Description as='p'>{transItems.transactionId}-{transItems.label}</List.Description>
                    </List.Content>
                    </List.Item>
                ))}
                </List>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Transaction
