import { ClipboardText } from 'phosphor-react'
import styles from './ListEmpty.module.css';

export function ListEmpty() {
  return (
    <div className={styles.content}>
      <ClipboardText size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}