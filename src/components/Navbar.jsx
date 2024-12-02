import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white top-0 fixed w-full shadow-2xl">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-16 px-8">
          {/* Company logo */}
          <div>
            <img src='images/Vitali-Health-02.png' 
            alt='vitali logo'
            className='w-40'/>
            {/* <h1 className="text-4xl text-soft-coral font-bold hover:cursor-pointer">Vitali Health</h1> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
          
            <AnchorLink
              href="#home"
              className="text-teal hover:bg-soft-coral hover:text-white rounded-3xl px-4 py-2 text-base "
            >
              <FontAwesomeIcon icon={faHouse} className='px-1 items-center'/> 
              Home
            </AnchorLink>
            <AnchorLink
              href="#aboutus"
              className="text-teal hover:bg-soft-coral hover:text-white rounded-3xl px-4 py-2 text-base "
            >
              About Us
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="text-teal hover:bg-soft-coral hover:text-white rounded-3xl px-3 py-2 text-base"
            >
              Get in Touch
            </AnchorLink>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-3xl p-2 text-teal hover:bg-soft-coral focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-teal">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block text-white rounded-3xl px-3 py-2 text-base "
            >
              Home
            </a>
            <a
              href="#"
              className="block text-white hover:bg-soft-coral hover:text-white rounded-3xl px-3 py-2 text-base "
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-white hover:bg-soft-coral hover:text-white rounded-3xl px-3 py-2 text-base "
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
