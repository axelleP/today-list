'use client';

import { useState } from 'react';

import { tasksData } from '../../lib/tasks-data.js';
import { TaskType } from '../../types/taskType';

import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';
import DeleteAll from './delete-all';

export default function Page() {
  const [filterStateTask, setFilterStateTask] = useState('all');
  const [filterTimeOfDay, setFilterTimeOfDay] = useState('all');
  const [filterName, setFilterName] = useState('');
  const [tasks, setTasks] = useState(tasksData as TaskType[]);

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="self-center sm:mx-auto md:my-10 shadow-lg shadow-indigo-50 p-6 bg-white md:rounded-lg space-y-8">
      <Info tasks={ tasks }/>
      <Add />
      <Filters 
        onSetFilterStateTask={ setFilterStateTask } 
        onSetFilterTimeOfDay={ setFilterTimeOfDay }
        onSetFilterName={ setFilterName }
      />
      <DeleteAll onDeleteAllTasks={ () => setTasks([] as TaskType[]) }/>
      <Table 
        tasks={ tasks } 
        filterStateTask={ filterStateTask }
        filterTimeOfDay={ filterTimeOfDay }
        filterName={ filterName }
        onDeleteTask={ handleDeleteTask }
      />
    </div>
  );
}
