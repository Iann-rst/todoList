
import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';
import styles from './List.module.css';

interface Task {
  id: string;
  content: string;
  isComplete: boolean;
}

interface Props {
  todo: Task;
  onDeleteTask: (id: string) => void;
  tasksComplete: (id: string) => void;
}


export function List({ todo, onDeleteTask, tasksComplete }: Props) {


  console.log(todo.id);

  function deleteTask() {
    onDeleteTask(todo.id);
  }

  function handleSelectTask() {
    tasksComplete(todo.id);
  }
  return (
    <div className={styles.list}>
      <button className={todo.isComplete === true ? styles.selectedTaskT : styles.btnSelect} onClick={handleSelectTask}>{todo.isComplete && <Check weight='bold' />}</button>
      <span className={todo.isComplete === true ? styles.text : ''}>{todo.content}</span>
      <button className={styles.btnDelete} onClick={deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}