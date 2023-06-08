import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Italo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, eveniet aperiam consectetur animi ducimus sint officia et corporis nisi quam quisquam officiis. Consectetur, est officiis reiciendis repellendus enim natus quam!"
          />
          <Post
            author="Ailton"
            content="Fale brow, sit amet consectetur adipisicing elit. Sit, eveniet aperiam consectetur animi ducimus sint officia et corporis nisi quam quisquam officiis. Consectetur, est officiis reiciendis repellendus enim natus quam!"
          />
        </main>
      </div>
    </div>
  )
}
