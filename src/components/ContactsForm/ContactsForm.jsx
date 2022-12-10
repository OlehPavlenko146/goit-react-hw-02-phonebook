import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, AddBtn } from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const state = this.state;
    this.props.onSubmit(state);
    this.reset(event);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={nanoid()}>
          Name
          <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nanoid()}
          />
        </Label>
        <Label htmlFor={nanoid()}>
          Number
          <Input
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            id={nanoid()}
          />
        </Label>
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
