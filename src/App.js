import React, { Component } from 'react';
import {
  Container,
  Grid,
  Input,
  Select,
  Button,
  Form,
} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { getCurrency } from './actions/allaction';
import axios from 'axios';

import ListCurrency from './components/ListCurrency';

const currencyOptions = [
  { key: 'cad', text: 'Canadian Dollar', value: 'CAD' },
  { key: 'chf', text: 'Swiss Franc', value: 'CHF' },
  { key: 'inr', text: 'Indian Rupee', value: 'INR' },
  { key: 'myr', text: 'Malaysian Ringgit', value: 'MYR' },
  { key: 'jpy', text: 'Japanese Yen', value: 'JPY' },
  { key: 'krw', text: 'South Korean Won', value: 'KRW' },
  { key: 'idr', text: 'Indonesia Rupiah', value: 'IDR' },
  { key: 'gbp', text: 'Pound Sterling', value: 'GBP' },
  { key: 'sgd', text: 'Singapore Dollar', value: 'SGD' },
  { key: 'eur', text: 'Euro', value: 'EUR' },
];

const mapStateToProps = state => ({
  currency: state.currency,
});

const mapActionToProps = {
  getCurrency: getCurrency,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      selected: '',
      list: ['GBP', 'IDR', 'SGD', 'EUR'],
    };
    this.changeListCurrency = this.changeListCurrency.bind(this);
    this.submitCurrency = this.submitCurrency.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.deleteCurrency = this.deleteCurrency.bind(this);
  }
  componentDidMount() {
    this.getCurrency();
  }
  getCurrency() {
    axios.get(`https://api.exchangeratesapi.io/latest?base=USD`).then(res => {
      this.props.getCurrency(res.data);
    });
  }
  changeListCurrency(e, data) {
    this.setState({
      selected: data.value,
    });
  }
  changeNumber(e) {
    if (e.target.value !== '') {
      this.setState({
        number: e.target.value,
      });
    }
  }
  submitCurrency() {
    const { list, selected } = this.state;
    const check = list.indexOf(selected);
    if (check > -1) {
      alert('Currency Already added');
    } else {
      this.setState({
        list: [...this.state.list, this.state.selected],
      });
    }
  }
  deleteCurrency(id) {
    const { list } = this.state;
    let filterDelete = list.indexOf(id);
    if (filterDelete > -1) {
      list.splice(filterDelete, 1);
      this.setState({
        list: list,
      });
    }
  }
  render() {
    const { currency } = this.props;
    const { number, list } = this.state;
    return (
      <Container className="container">
        {/* Header */}
        <Grid className="header">
          <Grid.Row columns={1}>
            <Grid.Column>USD - United States Dollars</Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column className="flex center" textAlign="left">
              USD
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Input
                placeholder="Search..."
                defaultValue={number}
                name="number"
                type="number"
                size="mini"
                onChange={this.changeNumber}
                className="w80"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* List */}
        <ListCurrency
          data={currency}
          number={number}
          list={list}
          deletecurrency={this.deleteCurrency}
          detailcurrency={currencyOptions}
        />
        {/* Input */}
        <Grid className="add-currency">
          <Grid.Row columns={2}>
            <Form onSubmit={this.submitCurrency} className="flex">
              <Grid.Column width={11}>
                <Select
                  placeholder="Select your currency"
                  options={currencyOptions}
                  onChange={this.changeListCurrency}
                />
              </Grid.Column>
              <Grid.Column width={5}>
                <Button color="green">Submit</Button>
              </Grid.Column>
            </Form>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps,
)(App);
