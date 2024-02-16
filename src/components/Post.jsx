import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Balula12.png"></img>
                <div className={styles.authorInfo}>
                    <strong>Gustavo Balula</strong>
                    <span>Web Developer</span>
                    </div>
                </div>

                <time title='13 de Fevereiro às 16:58'>Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="">👉{' '} jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a>#nlw </a>{' '}
                <a>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei seu feedback
                </strong>

                <textarea 
                placeholder='Deixe um comentário'
                />

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
            
        </article>
    )
}