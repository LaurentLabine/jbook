import './resizable.css';
import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const listener = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  switch (direction) {
    case 'horizontal':
      resizableProps = {
        className: 'resize-horizontal',
        minConstraints: [innerWidth * 0.2, Infinity],
        maxConstraints: [innerWidth * 0.75, Infinity],
        height: Infinity,
        width: innerWidth * 0.75,
        resizeHandles: ['e'],
      };
      break;
    default:
      resizableProps = {
        minConstraints: [Infinity, 24],
        maxConstraints: [Infinity, innerHeight * 0.9],
        height: 300,
        width: Infinity,
        resizeHandles: ['s'],
      };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
