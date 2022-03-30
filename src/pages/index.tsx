import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>por apenas {product.amount} por mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img
          src="/assets/avatar.svg"
          alt="Garota de óculos programando em um notebook em cima de uma mesa com livros e café"
          />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KiotNAVtxKpobbb57k3MWML')

  const product = {
    priceId: price.id,
    amount: Intl.NumberFormat('pr-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),

  }
  return {
    props: {
      product
    }
  }
}
