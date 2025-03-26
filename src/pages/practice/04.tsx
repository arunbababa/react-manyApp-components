import { NextPage } from 'next';

import useInputValue from '@/hooks/useInputValue';

const Page: NextPage = () => {
  const { inputValue, onChangeInput } = useInputValue();

  return (
    <>
      w
      <div className="mx-auto mt-10 max-w-4">
        <div className="min-w-[200px]">
          <input
            className="ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
            placeholder="Type here..."
            onChange={onChangeInput}
          />
          <h3>{inputValue}</h3>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;

// 最初以下でやってあかんかったrefあかん
// import { NextPage } from 'next';
// import { useRef } from 'react';

// const Page: NextPage = () => {
//   const inputRef = useRef(null);

//   return (
//     <>
//       <div className="mx-auto mt-10 max-w-4">
//         <h3>{inputRef.current?.value}</h3>
//         <div className="min-w-[200px]">
//           <input
//             ref={inputRef}
//             className="ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
//             placeholder="Type here..."
//           />
//         </div>
//       </div>
//       ;
//     </>
//   );
// };

// export default Page;
