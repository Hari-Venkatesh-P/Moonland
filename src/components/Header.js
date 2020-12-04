import React from 'react';

function Header() {
  return (
      <div> 
            <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                    <img class="h-8 w-8" src="http://moonlandpromoters.com/images/favicon.ico" alt=""></img>
                    <h3 className="text-lg text-gray-300 leading-6 font-large  hover:text-white px-3">
                      Moon Land Promoters
                    </h3>
                  </div>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className=" flex items-center justify-end" >
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sites</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
      </div>
    );
}

export default Header;
