import { useEffect, useState } from "react";
import Search from './search';
const List = () => {
  const [data, setData] = useState([]);
  const getUserData = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((result) => setData(result.data));
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="wrapper">
        <Search val={data} setdata={setData}/>
        <div className="inner-wrapper">
            {data.map((currVal, index) => {
            return (
                <div className="map">
                    <div className="avatar">
                        <img src={currVal.avatar} alt="image not found" id="profile"/>
                    </div>
                    <div className="otherDetail">
                        <h2 key={index}>
                            {currVal.first_name} {currVal.last_name}
                        </h2>
                        <p>{currVal.email}</p>
                    </div>
                </div>
            );
            })}
      </div>
    </div>
  );
};

export default List;
