import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import useMemoApp from '@/hooks/useMemoApp';

const Page: NextPage = () => {
  const { inputValue, memos, deleteMemo, setInputValue, handleMemos } = useMemoApp();

  return (
    <>
      <div className="mx-auto mt-8 max-w-4xl">
        <div className="flex justify-center">
          <div className="">
            {/* 入力フォーム */}
            <div>
              <input
                className="mb-5 rounded-md border px-3 py-2 outline-none"
                type="text"
                placeholder="メモを追加する"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {/* 検索ボタン */}
              <Button
                variant="primary"
                label="追加"
                className="mx-auto mb-10 text-center"
                onClick={handleMemos}
              />
            </div>

            {/* メモの情報 */}
            {memos
              ? memos.map((memo, index) => (
                  <>
                    <div className="flex items-center justify-between border-b border-gray-200 py-2">
                      <li key={index}>{memo}</li>
                      <Button
                        label="削除"
                        variant="error-secondary"
                        onClick={() => deleteMemo(index)}
                      />
                    </div>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
