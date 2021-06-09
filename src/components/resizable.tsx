import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  switch (direction) {
    case 'horizontal':
      resizableProps = {
        className: 'resize-horizontal',
        minConstraints: [window.innerWidth * 0.2, Infinity],
        maxConstraints: [window.innerWidth * 0.75, Infinity],
        height: Infinity,
        width: window.innerWidth * 0.75,
        resizeHandles: ['e'],
      };
      break;
    default:
      resizableProps = {
        maxConstraints: [Infinity, window.innerHeight * 0.9],
        minConstraints: [Infinity, 24],
        height: direction === 'vertical' ? 300 : Infinity,
        width: Infinity,
        resizeHandles: ['s'],
      };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
