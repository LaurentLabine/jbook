import { useActions } from '../hooks/use-action';
import ActionButton from './action-button';
import './action-bar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <ActionButton icon="fas fa-arrow-up" action={() => moveCell(id, 'up')} />
      <ActionButton
        icon="fas fa-arrow-down"
        action={() => moveCell(id, 'down')}
      />
      <ActionButton icon="fas fa-times" action={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
