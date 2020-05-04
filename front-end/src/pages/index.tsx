import Head from '../components/head';
import Header from '../components/header';
import style from './index.module.scss';

const data = [
  {
    title: '起什么标题名字比较好呢',
    time: '2020.05.03',
    img: '/article.jpg'
  },
  {
    title: '起什么标题名字比较好呢',
    time: '2020.05.03',
    img: '/article.jpg'
  },
  {
    title: '起什么标题名字比较好呢',
    time: '2020.05.03',
    img: '/article.jpg'
  },
  {
    title: '起什么标题名字比较好呢',
    time: '2020.05.03',
    img: '/article.jpg'
  },
  {
    title: '起什么标题名字比较好呢',
    time: '2020.05.03',
    img: '/article.jpg'
  }
]

export default function Home() {
  return (
    <div>
      <Head />
      <Header />
      <div className={style.home}>
        {
          data.map((article, index) => {
            return (
              <div key={index} className={style.article}>
                <div className={style.section}>
                  <div className={style.time}>{article.time}</div>
                  <h1 className={style.title}>{article.title}</h1>
                </div>
                <div className={style.imgWrapper}>
                  <img className={style.img} src={article.img} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
