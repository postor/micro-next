import { Link } from '../common/routes'

const Nav = () => {
  return <div>
    <Link route="/">首页</Link> |
    <Link route="/about">关于</Link>
  </div>
}

export default Nav