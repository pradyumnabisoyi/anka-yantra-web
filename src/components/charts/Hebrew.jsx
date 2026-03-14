import { useContext, useRef, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { map } from "../../utils/Numerology";
import styles from "./hebrewTable.module.css";
const Hebrew = () => {
  const { user } = useContext(UserContext);
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.innerHTML = "";
      hb();
    }
  }, [user]);

  function hb() {
    var name1 = user.name;
    var name = name1.toLowerCase().replaceAll(" ", "");
    console.log(name);
    let sum = 0;
    let numbers = [];
    let a = [];
    let hbn = [];
    for (let i = 0; i < name.length; i++) {
      let value = parseInt(map[name[i]]);
      sum += value;
      a.push(name[i]);
      numbers.push(value);
    }
    hbn.push(a);
    hbn.push(numbers);
    let x = numbers;
    for (let i = 0; i < numbers.length - 1; i++) {
      x = hb1(x);
      hbn.push(x);
    }
    console.log(sum);
    hb2(hbn);
  }

  function hb1(numbers) {
    let x = [];
    for (let i = 1; i < numbers.length; i++) {
      let y = (numbers[i] + numbers[i - 1]) % 9;
      y = y == 0 ? 9 : y;
      x.push(y);
    }
    return x;
  }

  function hb2(array) {
    const table = tableRef.current;
    if (!table) return;
    table.className = styles.hebrewTable;

    array.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  }

  return (
    <div className="container">
      <h2 className="mb-4">Hebrew</h2>
      <table ref={tableRef} className={styles.hebrewTable}></table>
    </div>
  );
};

export default Hebrew;
