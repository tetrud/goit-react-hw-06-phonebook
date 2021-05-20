import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

//import initialContacts from './contacts.json';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (findName) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.getFilterContacts();

    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <Title title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filterContact}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
