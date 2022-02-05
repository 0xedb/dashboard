import { ReduxStore } from "../components/provider/redux";
import { Shell } from "../components/shell";
import { Table } from "../components/table";

// remove the mobile table here
// console.log
// TEST
// Error Boundary?

/**
 *
 *  TEST THE FULL APP AND MAKE SURE EVERYTHING IS WORKING FINE!!!
 */

const App: React.FC = function () {
  return (
    <Shell>
      <ReduxStore>
        <Table />
      </ReduxStore>
    </Shell>
  );
};

export default App;
