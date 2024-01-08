import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Outlet />
    </>
  )
}