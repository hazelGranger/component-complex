import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/Icon';

type SidebarIconProps = {
  icon: IconProp;
};

const SidebarIcon = ({ icon }: SidebarIconProps) => {
  return <Icon icon={icon} size="1.5rem" />;
};

export default SidebarIcon;
