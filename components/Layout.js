import Link      from 'next/link';
import Head      from 'next/head';
import Router    from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

Router.onChangeError = () => {
  NProgrss.done();
}
export default ({ title, children }) => (
  <div className="root">
    <Head>
      <title>Harland Lohora</title>
      <link rel="icon" href="/static/img/favicon.png"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
    </Head>
    <header>
    <Link href="/"><a>Home </a></Link>
    <Link href="/about"><a>About </a></Link>
    <Link href="/hireme"><a>Hire me</a></Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root{
        align-items    : center;
        display        : flex;
        flex-direction : column;
        justify-content: center;
      }
      header{
        background     : #03A9F4;
        display        : flex;
        font-size      : 1.2rem;
        justify-content: space-around;
        padding        : 1em;
        width          : 97.2%;
      }
      header a{
        color          : #FFF;
        text-decoration: none;
      }
      header a:hover{
        color      : #111;
        font.weight: bold;
      }
      footer{
        padding: 1em;

      }
      `}</style>
      <style global jsx>{`
        body{
            margin    : 0;
            font-size : 110%;
            background: #F1F1F1;
        }
      `}</style>
  </div>
)
