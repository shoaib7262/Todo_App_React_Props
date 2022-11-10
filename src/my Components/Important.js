import React from 'react'
import Header from './Header'

const Important = (props) => {
  const {deletItem} = props;
  
  const onDelet =(id)=>{
    deletItem(id)
  }
  
  let impItem  = props.tasks.filter((item)=>item.liked === true)
  console.log(impItem)
  
  return (
    <div className='important'>
      <Header name="Important" />
      {impItem.map((item)=>{
        return(
          
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
        )
      })}
    </div>
  )
}

export default Important