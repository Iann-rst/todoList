
import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';
import styles from './List.module.css';

interface Task {
  id: string;
  content: string;
  isComplete: boolean;
}

interface Props {
  task: Task;
  onDeleteTask: (id: string) => void;
  tasksComplete: (id: string) => void;
}


export function List({ task, onDeleteTask, tasksComplete }: Props) {

  function deleteTask() {
    onDeleteTask(task.id);
  }

  function handleSelectTask() {
    tasksComplete(task.id);
  }
  return (
    <div className={styles.list}>
      <button className={task.isComplete === true ? styles.selectedTaskT : styles.btnSelect} onClick={handleSelectTask}>{task.isComplete && <Check weight='bold' />}</button>
      <span className={task.isComplete === true ? styles.text : ''}>{task.content}</span>
      <button className={styles.btnDelete} onClick={deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}