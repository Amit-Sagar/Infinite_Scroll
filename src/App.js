import React, { useEffect, useState } from "react";
import InfiniteContent from "./InfiniteContent";

import "./App.css";

const PAGE_NUM = 1;
const App = () => {
  const [state, setState] = useState([]);
  const [pageNum, setPageNum] = useState(PAGE_NUM);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState('')

  useEffect(() => {
    setIsLoading(true);
    const response = InfiniteContent.get(
      `/api/get/home/articles?page=${pageNum}`
    );
      response
        .then(({ data }) => {
          setState((state)=>[...state, ...data]);

          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false)
          setIsError('Something went wrong, please contact the development team immediately',error)
          
        });


    
  }, [pageNum]);

  const scrollToEnd = () => {
    setPageNum(pageNum + 1);
  };

  // window.onscroll = function () {
  //   // console.log('outside if')
  //   const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
  //   // console.log('clientHeight',clientHeight)
  //   // console.log('scrollTop',scrollTop)
  //   // console.log('scrollHeight',scrollHeight)

  //   if (scrollTop+clientHeight >= scrollHeight-1) {
  //     console.log('scrolled inside if')
  //     scrollToEnd();
  //   }
  // };

  // const handleScroll =(event)=>{
  //   console.log(event)
  //   const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;

  //   if(scrollHeight-scrollTop === clientHeight){
  //     setPageNum(prev=>prev+1)
  //   }
  // }
 const handleOnclick =()=>{
   setPageNum(pageNum+1);
 }

  return (
    <div className="main">
      <div className="header">INFINITE SCROLL</div>
      <div className="content-container">
        {state.map((element) => {
          return (
            <div key={element.nid} className="content">
              <div className="leftside">
                <img
                  src={`https://www.enanyang.my/${element.teaser_image}`}
                  alt={element.title}
                />
              </div>
              <div className="rightside">
                <h2>Title: {element.title}</h2>
                <h3>Channel: {element.channel}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="load">
      {isLoading ? (
        <div class="ui active large centered inline loader"></div>
      ) :
      (
        <div className="btn-container">
        <button onClick={handleOnclick}>Load more</button>
      </div>
      )} 
      </div>
      
      <div className="error">{iserror}</div>
    </div>
  );
};

export default App;
