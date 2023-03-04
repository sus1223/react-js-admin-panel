import "./list.scss";
import { Sidebar, Navbar, Datatable } from "../../components";

const List = ({ pageAddress }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable pageAddress={pageAddress} />
      </div>
    </div>
  );
};

export default List;
