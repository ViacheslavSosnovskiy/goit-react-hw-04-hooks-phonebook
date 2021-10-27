import s from "./filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;

// ===================================//

// const Filter = ({ value, onChange }) => {
//   <label>
//     <input type="text" value={value} onChange={onChange} />
//     Фильтр по имени
//   </label>;
// };

// export default Filter;
