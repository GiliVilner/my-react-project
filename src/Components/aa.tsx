import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ImportsNotUsedAsValues } from "typescript";

// function Test() {
//     const navigate = useNavigate()
//     const [songs, setSongs] = useState([]);
//     return (
//       <div>
//         <Routes>
//             <Route path="/" element={<p>home</p>} />
//             <Route path="/songs">
//               <Route path="/songs" element={<p>display songs component </p>} />
//               <Route path="/songs/new" element={<p>new song component </p>} />
//               <Route path="/songs/edit/:id" element={<p>edit song component </p>}/>
//             </Route>
//           </Routes>
//           <button onClick={() => { navigate('/') }}>home</button>
//           <button onClick={() => { navigate('/songs') }}>view all</button>
//           <button onClick={() => { navigate('/songs/new') }}>add</button>
//           <button onClick={() => { navigate('/songs/edit/123') }}>edit</button>
//       </div>
//     );
//   }