import axios from "axios";

export default axios.create({
    baseURL: 'https://www.enanyang.my'
})



// import React, { useEffect, useState } from "react";
// import InfiniteContent from "./InfiniteContent";

// import "./App.css";

// const PAGE_NUM = 1;
// const App = () => {
//   const [state, setState] = useState([]);
//   const [pageNum, setPageNum] = useState(PAGE_NUM);
//   const [isLoading, setIsLoading] = useState(true);
//   const [iserror, setIsError] = useState('')

//   useEffect(() => {
//     setIsLoading(true);
//     const response = InfiniteContent.get(
//       `/api/get/home/articles?page=${pageNum}`
//     );
//       response
//         .then(({ data }) => {
//           setState((state)=>[...state, ...data]);

//           setIsLoading(false);
//         })
//         .catch((error) => {
//           setIsError('here is your error buddy',error)
          
//         });
    
//   }, [pageNum]);

//   const scrollToEnd = () => {
//     setPageNum(pageNum + 1);
//   };

//   window.onscroll = function () {
//     console.log('outside if')
//     console.log('innerHeight',window.innerHeight)
//     console.log('scrollTop',document.documentElement.scrollTop)
//     console.log('OffsetHeight',document.documentElement.offsetHeight)
    
//     if (
//       window.innerHeight + document.documentElement.scrollTop 
//       === document.documentElement.offsetHeight
//     ) {
//       console.log('scrolled inside if')
//       scrollToEnd();
//     }
//   };

//   // const handleScroll =(event)=>{
//   //   console.log(event)
//   //   const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;

//   //   if(scrollHeight-scrollTop === clientHeight){
//   //     setPageNum(prev=>prev+1)
//   //   }
//   // }


//   return (
//     <div className="main">
//       <div className="header">INFINITE SCROLL</div>
//       <div className="content-container">
//         {state.map((element) => {
//           return (
//             <div key={element.nid} className="content">
//               <div className="leftside">
//                 <img
//                   src={`https://www.enanyang.my/${element.teaser_image}`}
//                   alt={element.title}
//                 />
//               </div>
//               <div className="rightside">
//                 <h2>Title: {element.title}</h2>
//                 <h3>Channel: {element.channel}</h3>
//               </div>
//             </div>
//           );
//         })}

//         {isLoading && (
//         <div class={`ui segment ${isLoading?'hidden':'active'}`}>
//           <div class="ui active inverted dimmer">
//             <div class="ui text loader">Loading...</div>
//           </div>
//           <p></p>
//         </div>
//       ) } 

//         {iserror}

//       </div>
//     </div>
//   );
// };

// export default App;
