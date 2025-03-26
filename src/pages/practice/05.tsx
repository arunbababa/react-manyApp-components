import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import useCangeColor from '@/hooks/useCangeColor';

const Page: NextPage = () => {
  const { changeColor, color } = useCangeColor();
  return (
    <>
      <div className="h-screen pt-8" style={{ backgroundColor: color }}>
        <div className="flex justify-center">
          <Button label="色を変更" variant="primary" onClick={changeColor}></Button>
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
