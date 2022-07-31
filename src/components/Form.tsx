
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';
import styles from './Form.module.css';
import { List } from './List';
import { ListEmpty } from './ListEmpty';

interface Task {
  id: string;
  content: string;
  isComplete: boolean;
}

export function Form() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');


  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  //Função para adicionar nova tarefa
  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const novaTarefa = {
      id: uuidv4(),
      content: newTask,
      isComplete: false
    }
    setTasks([...tasks, novaTarefa])
    setNewTask('');
  }


  //Função para deletar a tarefa
  function handleDeleteTask(taskId: string) {
    console.log('Task para ser deletada: ', taskId)
    const newTasksWithoutTaskSelected = tasks.filter(t => t.id !== taskId);
    setTasks(newTasksWithoutTaskSelected);
  }


  function selectedTaskComplete(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete
      } return task
    })

    setTasks(updatedTasks)
  }


  const taskComplete = tasks.filter(task => task.isComplete === true);
  const taskInputEmpty = newTask.length === 0;



  return (
    <main className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleAddNewTask}>
        <textarea
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskChange}
          value={newTask}
          required
        />

        <button disabled={taskInputEmpty}>
          Criar
          <PlusCircle size={20} weight={"bold"} />
        </button>

      </form>

      <div className={styles.headerList}>
        <div className={styles.task}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.taskComplete}>
          <strong>Concluídas</strong>
          <span>{taskComplete.length === 0 ? 0 : `${taskComplete.length} de ${tasks.length}`}</span>
        </div>
      </div>

      {
        tasks.length === 0
          ?
          <ListEmpty />
          :
          tasks.map(task => <List key={task.id} task={task} onDeleteTask={handleDeleteTask} tasksComplete={selectedTaskComplete} />)
      }

    </main>
  )
}