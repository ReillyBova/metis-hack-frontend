import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Card, Icon, Image, Header, Button } from 'semantic-ui-react'

const BalanceCard = styled(Card)`
width: 100% !important;
`

const TotalBalanceText = styled.div`
font-size: 24px;
font-weight 500;
float: left;
margin-right: auto;
`

const TotalBalanceVal = styled.div`
font-size: 24px;
font-weight 500;
float: right;
margin-left: auto;
`

const CenteredColumn = styled(Grid.Column)`
text-align: center;
`

class Funds extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <BalanceCard>
              <Card.Content>
                <TotalBalanceText>Total Account Balance:</TotalBalanceText>
                <TotalBalanceVal>$100.00</TotalBalanceVal>
              </Card.Content>
              <Card.Content>
                <Grid columns={2}>
                  <CenteredColumn>
                    <Button inverted color='violet'>Deposit Funds</Button>
                  </CenteredColumn>
                  <CenteredColumn>
                    <Button inverted color='violet'>Withdraw Funds</Button>
                  </CenteredColumn>
                </Grid>
              </Card.Content>
            </BalanceCard>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Funds;
