import { useContext } from "react";
import { dataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const data = useContext(dataContext);

  return (
    <>
      <div>
        <Link to="/admin/add_product">ADD_product</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button>delete</button>
                    <Link to="/admin/add_product">update</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
