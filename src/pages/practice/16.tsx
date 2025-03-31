// メモアプリ 実装前の自分の整理
// 機能要件
// インプットがある
// インプットに追加したものを追加ボタンで目も追加できる
// メモ追加したものは削除ボタンで削除できる
// メモ追加したものは完了ボタンを押すことでテキストに横文字が入る（tialwindかな）
// インプットが空の際は簡単なバリデーションをする（追加できないようにする）←エラーが出るようにしたい
// 一旦インデックスでやる自分で書いた後に動画見てインデックスじゃない固有なkeyをつけるにはどうすればいいかを知り修正する

// んー詰まってわからんかった

import { NextPage } from 'next';
import { useState } from 'react';
// import { boolean } from 'zod';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [memos, setMemos] = useState<string[]>([]);
  //   isdone: boolean,
  //   todo: string | null,
  // });

  const handleMemos = () => {
    if (!inputValue) {
      alert('なんか入れようぜ');
    }
    // setMemos((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  const deleteMemo = (index: number) => {
    setMemos((prev) => prev.filter((_, i) => i !== index));
  };

  const [isDone, setIsDone] = useState('');
  const doneMemo = (index: number) => {};

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
                placeholder="タスクを入力"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              {/* 検索ボタン */}
              <Button variant="primary" label="追加" className="mb-10" onClick={handleMemos} />
            </div>

            {/* メモの情報 */}
            {memos
              ? memos.map((memo, index) => (
                  <>
                    <div
                      className={
                        isDone
                          ? 'flex items-center justify-between border-b border-gray-200 py-2 line-through'
                          : 'flex items-center justify-between border-b border-gray-200 py-2'
                      }
                    >
                      <li key={index}>{memo}</li>
                      <div className="flex gap-x-4">
                        <Button
                          label="削除"
                          variant="error-secondary"
                          onClick={() => deleteMemo(index)}
                        />
                        <Button label="完了" variant="secondary" onClick={() => doneMemo(index)} />
                      </div>
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
