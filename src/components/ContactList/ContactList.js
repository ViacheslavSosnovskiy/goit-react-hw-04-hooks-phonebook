import Item from "./Item";
import s from "./contact.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contact}>
      {contacts.map((contact) => (
        <Item key={contact.id} {...contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
