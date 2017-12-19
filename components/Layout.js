
import Head from 'next/head'
import Link from 'next/link'

const defaultLinks = [ { href: '/', label: 'home' } ]
const logoutLinks = [ 'login' ]
const loginLinks = [ 'logout' ]

export default (props) => (
  <div>
    <Head>
      <title>NNARD</title>
    </Head>
    <div>
      <ul>
        {defaultLinks.concat(logoutLinks).map(link => (
          <li key={link.href || link}>
            <Link href={link.href || link}>
              <a>{link.label || link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    {props.children}
  </div>
)