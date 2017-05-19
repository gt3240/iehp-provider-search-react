import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

const HomePage = () => {
  const CODE = `const woah = fun => fun + 1;
                const dude = woah(2) + 3;
                function thisIsAFunction() {
                  return [1,2,3].map(n => n + 1).filter(n !== 3);
                }
                console.log('making up fake code is really hard');

                function itIs() {
                  return 'no seriously really it is';
                }`;
  return (
    <div className="col-sm-8">
      <h1>Home </h1>
      <SyntaxHighlighter language='javascript' style={ docco }>
        { CODE }
      </SyntaxHighlighter>
    </div>
    );
};

export default HomePage;
