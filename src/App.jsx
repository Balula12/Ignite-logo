import { Header } from "./components/Header";
import { Post } from './Post';
import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
    <Header />

  
    <div className={styles.wrapper}>
      <Sidebar />
      
      <main>
        <Post 
        author="Gustavo Balula"
        
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quae cupiditate excepturi sint eum tempora exercitationem accusantium doloribus aspernatur minima quod eos, provident sequi magnam libero veritatis alias similique. Ut?"
      />

      <Post
        author ="Nathaly Souza"
        content= "ASLDASDADADADSASDAD"
      />
      </main>
    </div>
   </div>
  )
}


