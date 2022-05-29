import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'
import Article from '../components/article'

const Home = (props) => {
  return (
		<MainLayout>
			<Head>
				<title>Simple News</title>
			</Head>

			<div className={styles.main}>
				<Article title="headlines" articles={props.topArticles} />
			</div>
		</MainLayout>
	);
}

export const getStaticProps = async () => {
	// NewsAPIのトップ記事の情報を取得
	const pageSize = 10; // 取得したい記事の数
	const topRes = await fetch(
		`https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=94f186d7b6584b24a150a5bf7748393f`
	);
	const topJson = await topRes.json();
	const topArticles = topJson?.articles;

	return {
		props: {
			topArticles,
		},
		revalidate: 60 * 10,
	};
};

export default Home
