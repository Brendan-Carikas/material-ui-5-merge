import React, { useCallback, useState } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { IconButton, MenuItem, Menu } from '@mui/material';
import { useHistory } from 'react-router-dom';
import InvotraTooltip from '../../Tooltip';
import { WorkbarMenuItems } from '../types';

interface WorkbarMenuDropdownProps {
  menuItems: WorkbarMenuItems[];
  tooltip: string;
  icon: SvgIconComponent;
}

export default function WorkbarMenuDropdown({
  menuItems,
  tooltip,
  icon: Icon,
}: WorkbarMenuDropdownProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, [setAnchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const open = Boolean(anchorEl);

  return (
    <div className="invotra-workbar__dropdown">
      <InvotraTooltip title={tooltip}>
        <IconButton
          className="invotra-workbar__icon-button"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Icon />
        </IconButton>
      </InvotraTooltip>
      <Menu
        id="invotra-workbar-menu"
        aria-labelledby="invotra-menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        role="menu"
      >
        {menuItems.map((item, i) => (
          <MenuItem
            key={`menu-item-${i.toString()}`}
            onClick={() => history.push(item.path)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
