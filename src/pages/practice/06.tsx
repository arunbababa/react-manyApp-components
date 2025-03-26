import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import useFeedBuck from '@/hooks/useFeedBuck';

const Page: NextPage = () => {
  const { feedBacks, inputValue, onSubmitFeedBuck, setInputValue } = useFeedBuck();

  return (
    // カスタムフックへ切り出すさいだが、もう全部ここで洗い出せる
    // setInputValueとonSubmitFeedBuckとinputValueとfeedBacksを出せればよいまぁ上見ても当然か
    <>
      <div className="h-screen pt-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <input
              type="text"
              className="mb-10"
              placeholder="okaokaoak"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex justify-center">
              <Button variant="text" label="送信する" onClick={onSubmitFeedBuck} />
            </div>
            <ul>
              {feedBacks.map((feedBack) => (
                <li key={feedBack.id}>{feedBack.date}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
