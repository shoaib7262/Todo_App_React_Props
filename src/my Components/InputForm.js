import React from "react";


const InputForm = ({setTitle, title, setDiscription, Discription}) => {
    
   

  return (
    <div>
      <div className="mx-5 my-5">
        <div className="mb-3">
          <label className="form-label label">
            Title
          </label>
          <input
            type="text"
            className="form-control rounded"
            id="title"
            placeholder="enter the title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label label">
            Discription
          </label>
          <textarea
            className="form-control rounded"
            id="discription"
            rows="3"
            placeholder="enter discription"
            value={Discription}
            onChange={(e)=>setDiscription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-check">
          <input
            className="form-check-input rounded"
            type="checkbox"
            value=""
            id="flexCheckDefault"
         
          />
          <label className="form-check-label" >
            important
          </label>
        </div>
        
      </div>

      
      
    </div>
  );
};

export default InputForm;
