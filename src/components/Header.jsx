import {useState} from"react"
import {Menu,X} from"lucide-react" 
const Header = () => {
const[isOpen,SetisOpen]=useState(false)
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold">Josue</a>
        <nav className={`${isOpen? "lg:flex":"lg:hidden"} md:itme-center`}>
          <ul className="lg:flex lg:space-x-4">
            <li><a href="#home" className="hover:text-purple-600">Acceuil</a></li>
            <li><a href="#portfolio" className="hover:text-purple-600">Portfolio</a></li>
            <li><a href="#skills" className="hover:text-purple-600">Competence</a></li>
            <li><a href="#timeline" className="hover:text-purple-600">Blog</a></li>
            <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </nav>
        <button
          className="block"
          onClick={()=>SetisOpen(!isOpen)}
        >
      {!isOpen?<Menu color="blue" size={32}/>
      :<off color="red" size={32}/>}  
        </button>
      </div>
    </header>
  );
}

export default Header;
