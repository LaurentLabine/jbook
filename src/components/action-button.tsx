interface ActionButtonProps {
  icon: string;
  action: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, action }) => {
  console.log(typeof action);
  return (
    <button className="button is-primary is-small" onClick={action}>
      <span className="icon">
        <i className={icon} />
      </span>
    </button>
  );
};

export default ActionButton;
