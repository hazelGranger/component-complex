import React, { JSXElementConstructor, ReactElement } from 'react';
import { LoadScriptNext } from '@react-google-maps/api';

// This component is for loading google map script in dom

interface LoadedScriptProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

const LoadedScript = ({ children }: LoadedScriptProps) => {
  console.log(process.env);
  return (
    <LoadScriptNext
      id="script-loader"
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY ?? ''}
      language="en"
      region="nz"
      libraries={['drawing', 'places']}
    >
      {children}
    </LoadScriptNext>
  );
};

export default LoadedScript;
