import { ThumbsUp, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";


export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Balula12.png" alt=""/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gustavo Balula</strong>
                        <time title="16/02/2024 às 17:05" dateTime="2024-02-16 17:06:00">Cerca de 1 hora atrás</time>
                       
                    </div>

                    <button title="Deletar comentário">
                        <TrashSimple size={24} />
                    </button>
                </header>
                <p>Muito Bem Gustavo</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}