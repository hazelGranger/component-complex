import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type iconProps = {
  icon: IconProp;
  size?: string | number | undefined;
  color?: string | undefined;
};

const Icon = ({ icon, size = '2rem', color }: iconProps) => (
  <FontAwesomeIcon icon={icon} color={color} width={size} />
);

export default Icon;
