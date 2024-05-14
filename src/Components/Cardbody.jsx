import React, { useEffect } from "react";
import "./Card.css";
import { useState } from "react";

const Cardbody = ({ card, setCard, setTitle, setId, setDescription, box, setBox }) => {
  const [filt, setFilt] = useState("");
  const [status, setStatus] = useState([]);

  //Handling Edit card
  const handleEdit = (a, b, c) => {
    setId(a);
    setTitle(b);
    setDescription(c);
  };

  //Handling Card Deletion
  const handleDelete = (deleteTargetId) => {
    console.log(deleteTargetId);

    setCard(
      card.filter((ele) => {
        return ele.id !== deleteTargetId;
      })
    );
    
    setBox(
      box.filter((ele) => {
        return ele.id !== deleteTargetId;
      })
    );
  };

  //Handling card status

  const handleStatus = (a, b, c) => {
    card.map((ele) => {
      if (ele.id == b) {
        ele.statusCode = a;
        setStatus([...status, a]);
        // console.log(status);
        // console.log("change", b);
        // console.log("change", c);
      }
    });
    console.log("card",card)
    console.log("box",box)
  };

  //Handling Card filter

  const handleFilter = (a) => {
    setFilt(a);
  };
 

  // re render logic when any update happens 
  useEffect(() => {
    if (filt == "Completed") {
      let test = box.filter((ele) => ele.statusCode == "Completed");
      setCard(test);
     
    } else if (filt == "Not Completed") {
      let test = box.filter((ele) => ele.statusCode == "Not Completed");
      setCard(test);
    } else {
      let testee = box.forEach((ele) => {
        if (ele.statusCode == 1) {
        }
      });
      setCard(box);
    }
  }, [filt, box, status]);

//  clean up logics 
  if (status.length > 5) {
    setStatus([]);
  }
 
  const handleSearch = (a)=>{
    // console.log(a)
      setCard(box.filter((ele)=> ele.title.toLowerCase().includes(a.toLowerCase())))
  }

  
  //JSX
  return (
    <div>
      <div className="col-12 form-container">
        <form className="form col-10 col-lg-8">

          {/* searchbar  */}

          <div className="searchBar">
            <div className="searchRow">
            <input type="text" onChange={(e)=>{handleSearch(e.target.value)}} placeholder="Search" /> 
            <button>
              <i className="fa fa-search" aria-hidden="true" />
            </button>
            </div>
          </div>

          {/* filter selection  */}
          <div className="filter">
          <label htmlFor="filter">Status Filter : </label>
          <select
            name="filter"
            id="filter"
            onChange={(e) => {
              handleFilter(e.target.value);
            }}
          >
            <option value={"All"}>All</option>
            <option value={"Completed"}>Completed</option>
            <option value={"Not Completed"}>Not Completed</option>
          </select>
          </div>
          
        </form>
      </div>
      <div className="cardbody">
      {card.map((ele) => {
        return (
          <div key={ele.id} className="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card">
            <h3>{ele.title}</h3>
            <div className="descriptionBox">
              <p>{ele.description}</p>
            </div>
            <form>
              <label for="status"></label>
              {/* status selection  */}
              <select className="changeStatus"
                onChange={(e) => {
                  handleStatus(e.target.value, ele.id, ele.statusCode);
                }}
                name="status"
                id="status"
                defaultValue={ele.statusCode}
              >
                <option value={"Not Completed"}>"Not completed"</option>
                <option value={"Completed"}>"Completed"</option>
              </select>
            </form>
            <br />
            <div className="card-button">
            {/* edit and delete buttons  */}
            <button className="editCard"
              onClick={() => {
                handleEdit(ele.id, ele.title, ele.description);
              }}
            >
              Edit
            </button>
            <button className="deleteCard"
              onClick={() => {
                handleDelete(ele.id);
              }}
            >
              Delete
            </button>
            </div>
            </div>
          </div>
        );
      })}
      
      </div>
    </div>
  );
};

export default Cardbody;
