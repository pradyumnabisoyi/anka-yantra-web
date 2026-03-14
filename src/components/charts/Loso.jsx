import { useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import styles from "./LosoTable.module.css";

const Loso = () => {
  const { user } = useContext(UserContext);
  function createGrid() {
    const grid = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 0: 0 };
    //console.log("User in Loso:", user.birthDate);
    var x = user.birthDate.split("-");
    setGrid(grid, Number(x[0]));
    setGrid(grid, Number(x[1]));
    setGrid(grid, Number(x[2]));
    var total = (Number(x[0]) % 9) + (Number(x[1]) % 9) + (Number(x[2]) % 9);
    total = total % 9 == 0 ? 9 : total % 9;
    grid[total] = grid[total] + 1;
    //console.log(grid);
    for (let i = 1; i < 10; i++) {
      document.getElementById("" + i).innerHTML = grid[i] != 0 ? i : "";
    }
  }
  function setGrid(grid, x) {
    var y = x % 9;
    y = y == 0 ? 9 : y;
    grid[y] = grid[y] + 1;

    while (x > 0) {
      y = parseInt(x % 10);
      grid[y] = grid[y] + 1;
      x = parseInt(x / 10);
    }
  }
  useEffect(() => {
    createGrid();
  });
  return (
    <div className="container">
      <h2 className="mb-4">Loso</h2>
      <table rules="none" className={`${styles['table-center']} ${styles.losotable} ${styles.tablecontainer}`}>
        <tbody>
        <tr>
          <td id="4"></td>
          <td id="9"></td>
          <td id="2"></td>
        </tr>
        <tr>
          <td id="3"></td>
          <td id="5"></td>
          <td id="7"></td>
        </tr>
        <tr>
          <td id="8"></td>
          <td id="1"></td>
          <td id="6"></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loso;
