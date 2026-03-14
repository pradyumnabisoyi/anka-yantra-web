import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import styles from "./LosoTable.module.css";
const Sapharial = () => {
  const { user } = useContext(UserContext);
  const table11 = { 1:1, 2:11, 3:111, 4:1111, 5:11111, 6:111111, 7:1111111, 0:0};
            function createGrid() {
                const grid = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
                var x = user.birthDate.split("-");
                setGrid(grid, Number(x[0] % 100));
                setGrid(grid, Number(x[1]));
                setGrid(grid, Number(x[2]));
                var total = Number(x[0])%9 + Number(x[1])%9 + Number(x[2])%9;
                total = (total%9 == 0)? 9 : total%9;
                grid[total] = grid[total] + 1;
                for (let i = 1; i < 10; i++) {
                    document.getElementById("" + i).innerHTML = (table11[grid[i]] * i != 0) ? table11[grid[i]] * i : "";
                }
            }
            function setGrid(grid, x) {
                var y = x%9;
                y = (y==0)?9:y;y = (x == 0)?0:y;
                grid[y] = grid[y] + 1;
                if (x>10 && x%10 != 0) {
                    grid[x%10] = grid[x%10] +1;
                    grid[parseInt(x/10)] = grid[parseInt(x/10)] + 1;
                }
            }
  useEffect(() => {
    createGrid();
  });
  return (
    <div className="container">
      <h2 className="mb-4">Sapharial</h2>
      <table rules="none" className={`${styles['table-center']} ${styles.losotable} ${styles.tablecontainer}`}>
                <tbody >
                  <tr><td id="3" ></td><td id="1"></td><td id="9"></td></tr>
                  <tr><td id="6"></td><td id="7"></td><td id="5"></td></tr>
                  <tr><td id="2"></td><td id="8"></td><td id="4"></td></tr>
                </tbody></table>
    </div>
  );
};

export default Sapharial;
