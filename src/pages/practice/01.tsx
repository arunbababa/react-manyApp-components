import { NextPage } from 'next';

import ThreeBoxComponents from '@/components/threeBoxComponents';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="grid grid-cols-3 gap-x-10">
        <ThreeBoxComponents
          title1="タイトルワンです"
          content1="コンテンツワンです"
          title2="タイトル２です"
          content2="コンテンツ２です"
          title3="タイトル３です"
          content3="コンテンツ３です"
        />
        {/* 関数コンポーネントはただの関数なので、別に別に子コンポーネントを親コンポーネントでプロップス渡した何かする際に、関数的に書いてもOK！ */}
        {/* {ThreeBoxComponents({title1,content1,title2,content2,title3,content3})} */}
      </div>
    </div>
  );
};

export default Page;
