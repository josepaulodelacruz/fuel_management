import { Menu } from 'lucide-react'

const Navbar = ({
  title = "", 
}) => {
  return (
    <nav className="w-full bg-white pl-3 py-5">
      <div className="flex flex-row">
        <Menu />
        <h2 className="font-light pl-2">{title}</h2>
      </div>
    </nav>

  )
}

export default Navbar;
