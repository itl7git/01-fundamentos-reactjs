import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1686262408~exp=1686263008~hmac=f992b422dfac22191f0bbba95f5a1f13cd4112b0dcfd8f85f3dc4320629fa1fe" />

          <div className={styles.authorInfo}>
            <strong>Italo Leal</strong>
            <span>Web Developer</span>
          </div>

        </div>
        <time title="11 de maio ás 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}