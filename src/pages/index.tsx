import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Edu News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, bem-vindo</span>
          <h1>Novidades sobre o universo <span>React</span></h1>
          <p>
            Tenha acesso a todas publicações <br />
            <span>por apenas R$9,90 por mês</span>
          </p>
          <SubscribeButton />
        </section>
        <img
          src="/assets/avatar.svg"
          alt="Garota de óculos programando em um notebook em cima de uma mesa com livros e café"
          />
      </main>
    </>
  )
}
