import Link from 'next/link';
export default ({ title, children }) => (
  <div className="root">
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
        background     : indigo;
        display        : flex;
        font-size      : 1.2rem;
        justify-content: space-around;
        padding        : 1em;
        width          : 97.2%;
      }
      header a{
        color          : darkgrey;
        text-decoration: none;
      }
      header a:hover{
        color      : lightgrey;
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
