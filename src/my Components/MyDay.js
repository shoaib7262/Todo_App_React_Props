import React, { useEffect } from "react";
import Header from "./Header";
const MyDay = (props) => {
  const {deletItem} = props
  useEffect(() => {
  
  }, [props]);
  const onDelet =(id)=>{
    deletItem(id)
  }
   
  return (
    <>
      <div className="todoItems">
        <Header name="My Day" />
        {props.tasks.map((item, id) => {
          return (
            <div key={item.id} >
              <div className="outer-card mx-2 my-2">
                <div className="card mx-2">
                  <div className="card-body">
                    <div className="dotedBorder">
                      <div>
                        <h6  className="card-title d-inline" id="card-title">
                          {item.Title}
                        </h6>
                      </div>
                      <div className="closeDiv">
                        <i onClick={()=>onDelet(item.id)}  className="btn fa-solid fa-xmark"></i>
                      </div>
                    </div>

                    <p  className="card-text" id="card-discription">
                      {item.Discription}
                    </p>
                    <div className="iconDiv">
                      <div className="inerDiv">
                        <div>
                          <button id="heartIcon">
                            <i className="fa-solid fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyDay;
