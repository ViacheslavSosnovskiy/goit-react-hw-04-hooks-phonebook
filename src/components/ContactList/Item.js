import s from "./contact.module.css";

const Item = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}</p>
      <p>{number}</p>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Item;
