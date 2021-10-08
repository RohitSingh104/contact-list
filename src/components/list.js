import { useEffect, useState } from "react";
import Search from './search';
const List = () => {
  const [data, setData] = useState([]);
  const [tempState,setTempState] = useState([]);

  useEffect(()=>{
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(apiData => {
        console.log(apiData , "console of apidata during fetch");
        setData(apiData.data);
      })
    setTempState(data);
    console.log(data , "console of data");
    console.log("hello from useeffect");

    console.log(tempState, "console of tempstate");
    
  },[])
  return (
    <div className="wrapper">
        <Search val={data} setdata={setData} settempstate={setTempState} tempstate={tempState}/>
        <div className="inner-wrapper">
            {tempState.map((currVal, index) => {
            return (
                <div className="map" key={index}>
                    <div className="avatar">
                        <img src={currVal.avatar}  alt="" id="profile" />
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



























