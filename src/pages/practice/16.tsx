import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
// import { boolean } from 'zod';

import Button from '@/components/common/parts/Button';

type Task = {
  label: string;
  completed: boolean;
};

const Page: NextPage = () => {
  const [taskLabel, setTaskLabel] = useState('');
  const handleChangeTaskLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(e.target.value);
  };
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (!taskLabel) {
      return; // 何もしない
    }
    setTaskList((prev) => [...prev, { label: taskLabel, completed: false }]);
    setTaskLabel('');
  };

  const handleCompleteTask = (index: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((prevTask, i) =>
        i === index ? { ...prevTask, completed: true } : prevTask,
      ),
    );
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => index !== i));
  };

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
                value={taskLabel}
                onChange={handleChangeTaskLabel}
              />

              {/* 検索ボタン */}
              <Button variant="primary" label="追加" className="mb-10" onClick={handleAddTask} />
            </div>

            {/* タスクの表示 */}
            <ul className="mt-4 space-y-5">
              {taskList.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between border-b border-gray-200 ${task.completed ? 'line-through' : ''}`}
                >
                  {task.label}
                  <div className="flex gap-x-2">
                    <Button
                      variant="secondary"
                      label="完了"
                      onClick={() => handleCompleteTask(index)}
                    />
                    <Button variant="error" label="削除" onClick={() => handleDeleteTask(index)} />
                  </div>
                </li>
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
