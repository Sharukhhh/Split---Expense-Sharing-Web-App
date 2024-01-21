// import React, { useEffect, useState } from 'react'

// const Pagination = ({currentPage , itemsPerPage , handlePageChange , datas , displayingDataChange}) => {

//     const [pageCount , setPageCount] = useState(0);
//     const [displayedData , setDisplayedData] = useState([]);

//     useEffect(() => {
//         setPageCount(Math.ceil(datas?.length / itemsPerPage));
//         const displayedDataPerPage = datas?.slice(currentPage * itemsPerPage , (currentPage + 1) * itemsPerPage);

//         setDisplayedData(displayedDataPerPage);
//         displayingDataChange(displayedDataPerPage);
//     },[datas, itemsPerPage, currentPage , displayingDataChange])

//   return (
//     <>
//         <div className='flex justify-center my-10'>
//             <nav className='block'>
//                 <ul className='flex pl-0 rounded list-none flex-wrap'>
//                     <li>
//                         <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 0}
//                         className='relative block py-2 px-3 leading-tight bg-white border
//                         border-gray-300 text-blue-700 hover:bg-gray-200 hover:text-blue-900 mr-2 rounded-l-lg'
//                         >
//                             Previous
//                         </button>
//                     </li>

//                     {Array.from({length : pageCount} , (_ , i) => (
//                         <li key={i}>
//                             <button 
//                             onClick={() => handlePageChange(i)}
//                             className={`relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 hover:bg-gray-200 hover:text-blue-900 ${
//                                 currentPage === i ? 'bg-gray-200' : ''}`}>
//                                 {i + 1}
//                             </button>
//                         </li>
//                     ))}

//                     <li>
//                         <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled = {currentPage === pageCount - 1}
//                         className='relative block py-2 px-3 ml-2 leading-tight bg-white border 
//                         border-gray-300 text-blue-700 hover:bg-gray-200 hover:text-blue-900 rounded-r-lg'
//                         >
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </>
//   )
// }

// export default Pagination