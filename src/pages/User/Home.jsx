import { useContext } from "react";
import { dataContext } from "../../contexts/DataContext";
import styles from "./home.module.scss";

const Home = () => {
  const data = useContext(dataContext);

  return (
    <>
      <div className={styles.wrapper}>
        <select name="" id="">
          <option value="all">All</option>
          {data.categories.map((item) => {
            return (
              <>
                <option value={item.slug}> {item.name}</option>
              </>
            );
          })}
        </select>
        {data.products.map((item, index) => {
          return (
            <>
              <div key={index} className={styles.item}>
                <div className={styles.image}>
                  <img src={item.thumbnail} alt="ảnh sản phẩm" />
                </div>
                <h3>{item.title}</h3>
                <div className={styles.detail}>
                  <div>{item.price}</div>
                  <div>Xem chi tiết</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
