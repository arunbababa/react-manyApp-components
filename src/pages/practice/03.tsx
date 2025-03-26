import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTextShowHidden } from '@/hooks/useTextShowHidden';

const Page: NextPage = () => {
  const { isDisp, onClickNODisp, onClickYESDisp } = useTextShowHidden();

  return (
    <>
      <div className="mx-auto mt-10 max-w-4">
        <div className="flex justify-center gap-x-10">
          <div className="mr-10">{isDisp && <h2>こんにちわ</h2>}</div>
          <Button className="max-w-5" variant="text" label="表示" onClick={onClickYESDisp}></Button>
          <Button
            className="max-w-5"
            variant="text"
            label="非表示"
            onClick={onClickNODisp}
          ></Button>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
