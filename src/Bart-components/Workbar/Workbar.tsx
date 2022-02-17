import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar as MuiToolbar,
} from '@mui/material';
import * as Icons from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { t } from 'ttag';
import Avatar from '../Avatar';
import useCurrentUserId from '../../../hooks/useCurrentUserId';
import { OperationStatus, useQuery } from '../../../hooks/graphql/operations';
import {
  FetchUserProfile,
  FetchUserProfileVariables,
} from '../../../graphql/queries/users/__generated__/FetchUserProfile';
import { FETCH_USER_PROFILE } from '../../../graphql/queries/users/FetchUserProfile';
import WorkbarMenuDropdown from './components/WorkbarMenuDropdown';
import WorkbarProfileMenu from './components/WorkbarProfileMenu';
import MainMenuDrawer from '../MainMenuDrawer';
import QueryStatusIndicator, { QueryStatusIndicatorStyle } from '../QueryStatusIndicator';
import InvotraTooltip from '../Tooltip';
import { WorkbarMenuItems } from './types';

import './style.scss';

// @TODO: This will probably be configurable at some point.
const menuItems: WorkbarMenuItems[] = [
  {
    label: t`Content`,
    path: '/content/create',
  },
  {
    label: t`Menu item`,
    path: '/admin/site-structure/create',
  },
];

const Workbar: React.FC = () => {
  const history = useHistory();
  const userId = useCurrentUserId();
  const profileMenuButtonRef = React.useRef<HTMLDivElement>(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mainMenuDrawerOpen, setMainMenuDrawerOpen] = useState(false);

  // Fetch user data for avatar icon.
  const { data, status, error } = useQuery<FetchUserProfile, FetchUserProfileVariables>(
    FETCH_USER_PROFILE,
    {
      variables: { userId: userId || '' },
    },
  );

  if (status === OperationStatus.LOADING) {
    return (
      <QueryStatusIndicator
        status={status}
        error={error}
        style={QueryStatusIndicatorStyle.INLINE}
      />
    );
  }

  const user = data?.User;
  const userImageUrl = user?.profileimage?.downloadUrl;

  return (
    <>
      <AppBar className="invotra-workbar" position="fixed">
        <MuiToolbar variant="dense" className="invotra-workbar__top" disableGutters>
          <div className="invotra-workbar__top-section left">
            <IconButton
              className="invotra-workbar__icon-button"
              onClick={() => setMainMenuDrawerOpen(true)}
              title="menu button"
            >
              <Icons.Dehaze />
            </IconButton>
            <img
              // @TODO: Make image configurable.
              src="/res/img/invotra-combinedmark_reverse.svg"
              alt="Invotra"
              className="invotra-workbar__logo"
            />
          </div>
          <div className="invotra-workbar__top-section right">
            <InvotraTooltip title={t`Administration`}>
              <IconButton
                className="invotra-workbar__icon-button"
                onClick={() => history.push('/admin/site-structure')}
              >
                <Icons.SettingsOutlined />
              </IconButton>
            </InvotraTooltip>
            <WorkbarMenuDropdown
              icon={Icons.Add}
              tooltip={t`Create`}
              menuItems={menuItems}
            />
            <div ref={profileMenuButtonRef}>
              {(user) && (
                <InvotraTooltip title={user.username || ''}>
                  <IconButton
                    className="invotra-workbar__icon-button"
                    onClick={() => setProfileMenuOpen((prev) => !prev)}
                  >
                    <Avatar
                      size="xsmall"
                      src={userImageUrl || undefined}
                      name={user.username || ''}
                    />
                  </IconButton>
                </InvotraTooltip>
              )}
              <WorkbarProfileMenu
                anchorEl={profileMenuButtonRef?.current}
                openState={[profileMenuOpen, setProfileMenuOpen]}
                imageUrl={userImageUrl}
                username={user?.username}
                userId={userId}
              />
            </div>
          </div>
        </MuiToolbar>
      </AppBar>
      <MainMenuDrawer
        logo
        openState={[mainMenuDrawerOpen, setMainMenuDrawerOpen]}
      />
    </>
  );
};

export default Workbar;

export const DefaultWorkbar = () => (
  <>
    <Workbar />
  </>
);
