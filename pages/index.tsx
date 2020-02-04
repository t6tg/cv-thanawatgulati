import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header';

const Index = () => {
  return (
    <div>
      <style jsx global>{`
        @font-face {
          font-family: 'k2d-bold';
          src: url('/fonts/K2D-Bold.ttf');
        }
        @font-face {
          font-family: 'k2d-reg';
          src: url('/fonts/K2D-Regular.ttf');
        }
        @font-face {
          font-family: 'k2d-med';
          src: url('/fonts/K2D-Medium.ttf');
        }
        @font-face {
          font-family: 'k2d-light';
          src: url('/fonts/K2D-Thin.ttf');
        }
        h1 {
          font-family: 'k2d-med';
        }
      `}</style>
      <Header />
    </div>
  );
};

export default Index;
