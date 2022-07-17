import React from 'react';

import Navbar from '@/components/Navbar';


const Main = (props) => (
  <div className="relative">
    <Navbar />
    <div className="w-full bg-slate-50  px-1 pt-16 antialiased">
      {props.meta}

      <div className="mx-auto max-w-6xl">
        <div className="content py-5 text-xl">{props.children}</div>
      </div>
    </div>
  </div>
);

export { Main };
