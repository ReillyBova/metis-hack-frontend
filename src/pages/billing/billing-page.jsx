import React, { Component, Fragment } from 'react'
import { PageHeader, ComponentWrapper } from 'components'
import { Table, Header } from 'semantic-ui-react'
import { theme } from 'assets/theme'
import styled from 'styled-components'

class BillingPage extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader>{'Billing History'}</PageHeader>
        <ComponentWrapper>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine><Header>Subscription Name</Header></Table.HeaderCell>
                <Table.HeaderCell><Header>Interval</Header></Table.HeaderCell>
                <Table.HeaderCell><Header>Amount</Header></Table.HeaderCell>
                <Table.HeaderCell><Header>Date Fufilled</Header></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>9/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>8/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Ujo</Header>
                </Table.Cell>
                <Table.Cell singleLine>Daily</Table.Cell>
                <Table.Cell textAlign='right'>5.99</Table.Cell>
                <Table.Cell textAlign='right'>8/17/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Balance</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>100000.00</Table.Cell>
                <Table.Cell textAlign='right'>8/16/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>7/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>6/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>5/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>4/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>3/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>2/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>1/18/2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>12/18/2017</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>24.99</Table.Cell>
                <Table.Cell textAlign='right'>11/18/2017</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                    <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>22.99</Table.Cell>
                <Table.Cell textAlign='right'>10/18/2017</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell singleLine>
                  <Header>Netflix</Header>
                </Table.Cell>
                <Table.Cell singleLine>Monthly</Table.Cell>
                <Table.Cell textAlign='right'>22.99</Table.Cell>
                <Table.Cell textAlign='right'>9/18/2017</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </ComponentWrapper>
      </Fragment>
    )
  }
}

export default BillingPage;
