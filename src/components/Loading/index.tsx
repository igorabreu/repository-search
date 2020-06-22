import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animation from 'assets/lottie/loading.json';

const Loading: React.SFC = () => (
  <Lottie
    speed={1.5}
    config={{ animationData: animation, loop: true }}
  ></Lottie>
);

export default Loading;
