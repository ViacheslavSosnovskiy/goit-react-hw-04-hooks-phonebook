import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Modal from "./Modal";
import IconButton from "./IconButton";

import s from "./App.module.css";

// ========== ID =========== //
import { v4 as uuidv4 } from "uuid";
// import shortid from "shortid";

import { ReactComponent as AddContact } from "./icons/user-plus.svg";
import { ReactComponent as Cross } from "./icons/cross.svg";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Kate Yeland", number: "234-01-29" },
      { id: "id-6", name: "Olex Bond", number: "456-87-54" },
    ],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    console.log("componentDidMount");

    const getContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(getContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    // console.log("parsedContacts", parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("this.state", this.state);
    if (this.state.contacts !== prevState.contacts) {
      console.log("обновилось поле!");

      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }

    // закрытие модалки через проверку
    if (
      this.state.contacts.length > prevState.contacts.length &&
      prevState.contacts.length !== 0
    ) {
      this.toggleModal();
    }
  }

  addContact = ({ name, number }) => {
    const person = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        (contact) => contact.name.toLowerCase() === person.name.toLowerCase()
      )
    ) {
      alert("This contact is already exist!! Try one more time, please!");
      return;
    }

    this.setState((prevState) => ({
      contacts: [person, ...prevState.contacts],
    }));

    // закрытие модалки по сабмиту формы
    // this.toggleModal();
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.container}>
        <IconButton onClick={this.toggleModal} aria-label="добавить контакт">
          <AddContact width="20" height="20" fill="white" />
        </IconButton>
        <h1>Phonebook</h1>

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <div className={s.wrapper}>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
        <div>
          {this.state.showModal && (
            <Modal onClose={this.toggleModal}>
              <IconButton onClick={this.toggleModal}>
                <Cross width="20" height="20" fill="white" />
              </IconButton>
              <div>
                <h2>Add contacts</h2>
                <ContactForm onSubmit={this.addContact} />
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default App;

// ================================================== //

// import React, { Component } from "react";
// import Form from "./Form/Form";
// import Filter from "./Filter/Filter";

// class App extends Component {
//   state = {
//     todos: "todos",
//     filter: "",
//   };

//   formSubmitHandler = (data) => {
//     console.log(data);
//   };

//   chacgeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const { todos, filter } = this.state;
//     return (
//       <>
//         <Form onSubmit={this.formSubmitHandler} />
//         <Filter value={filter} onChange={this.chacgeFilter} />
//       </>
//     );
//   }
// }

// export default App;
