import { MouseEventHandler } from 'react';

interface ActionButtonProps {
  icon: string;
  action: MouseEventHandler<HTMLButtonElement>; //Todo : Figure type out.
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, action }) => {
  return (
    <button className="button is-primary is-small" onClick={action}>
      <span className="icon">
        <i className={icon} />
      </span>
    </button>
  );
};

export default ActionButton;
