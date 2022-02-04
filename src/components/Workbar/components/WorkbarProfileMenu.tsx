import {
  Popper,
  PopperProps,
  Paper,
  ClickAwayListener,
  ClickAwayListenerProps,
  Grow,
  Typography,
  Button, IconButton,
} from '@mui/material';
import * as Icons from '@mui/icons-material';
import { Auth } from 'aws-amplify';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { t } from 'ttag';
import { State } from '../../../../types/state';
import Avatar from '../../Avatar';
import useWindowSize from '../../../../hooks/useWindowSize';
import { LARGEST_HANDSET } from '../../Wysiwyg/constants';

import './style.scss';

export interface WorkbarProfileMenuProps {
  anchorEl: PopperProps['anchorEl'];
  openState: State<boolean>;
  imageUrl: string | null | undefined;
  username: string | null | undefined;
  userId: string | undefined;
}

export default function WorkbarProfileMenu({
  anchorEl,
  openState: [open, setOpen],
  imageUrl,
  username,
  userId,
}: WorkbarProfileMenuProps) {
  const history = useHistory();

  const [width] = useWindowSize();

  const handleClose: ClickAwayListenerProps['onClickAway'] = (e) => {
    if ((anchorEl as HTMLElement)?.contains(e.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        className="invotra-workbar-profile-menu"
        role="menu"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'right top',
            }}
          >
            <Paper className="invotra-workbar-profile-menu__popper">
              <>
                <div className="invotra-workbar-profile-menu__menu-section">
                  {width < LARGEST_HANDSET && (
                    <div className="invotra-workbar-profile-menu__menu-section__close">
                      <IconButton
                        onClick={() => setOpen(false)}
                      >
                        <Icons.Close />
                      </IconButton>
                    </div>
                  )}
                  <div className="invotra-workbar-profile-menu__menu-section__avatar-name">
                    <Avatar
                      size="medium"
                      src={imageUrl || undefined}
                      name={username || ''}
                    />
                    <Typography variant="h6">
                      {username}
                    </Typography>
                  </div>
                  <div className="invotra-workbar-profile-menu__menu-section__inner">
                    <Button
                      onClick={async () => {
                        history.push(`/user/${userId}`);
                      }}
                    >
                      {t`View profile`}
                    </Button>
                    <Button
                      onClick={() => {
                      // @TODO: Make this configurable.
                        window.open('https://io1dev.atlassian.net/servicedesk/customer/portal/53', '_blank');
                      }}
                    >
                      {t`Need some help?`}
                    </Button>
                    <Button
                      onClick={async () => {
                        await Auth.signOut();
                        history.push('/');
                        window.location.reload();
                      }}
                    >
                      {t`Log out`}
                    </Button>
                  </div>
                </div>
              </>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ClickAwayListener>
  );
}
