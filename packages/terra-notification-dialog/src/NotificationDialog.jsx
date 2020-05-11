import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import FocusTrap from 'focus-trap-react';
import Button, { ButtonVariants } from 'terra-button';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import ThemeContext from 'terra-theme-context';

import NotificationIcon from './_NotificationIcon';
import ContentLayoutAsList from './_ContentLayoutAsList';

import styles from './NotificationDialog.module.scss';

const cx = classNamesBind.bind(styles);

const variants = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * The variant of notification to be rendered. This renders the dialog with the corresponding header and icon to the
   * variant concept.
   * Use one of `alert`, `error`, `warning`, `info`, or `custom`.
   */
  variant: PropTypes.oneOf([
    variants.ALERT,
    variants.ERROR,
    variants.WARNING,
    variants.INFO,
    variants.CUSTOM,
  ]).isRequired,
  /**
   * The title to describe the high-level overview of why the notification-dialog is being displayed to the user.
   */
  title: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the start of the notification dialog body.
   */
  startMessage: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the end of the notification dialog body.
   */
  endMessage: PropTypes.string,
  /**
   *  The content to be inserted after `startMessage` and/or before `endMessage` to provide more details to the user in the dialog body.
   */
  content: PropTypes.node,
  /**
   * The button text and onclick values of the accept button.
   */
  acceptAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The button text and onclick values of the reject button.
   */
  rejectAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The pieces to populate a notification-dialog when `variant="custom"`.
   */
  custom: PropTypes.shape({
    /**
     * The signal word to use in the notification-dialog.
     */
    signalWord: PropTypes.string,
    /**
     * The class name used to set the icon as the background image to be used as the icon in the notification-dialog.
     */
    iconClassName: PropTypes.string,
  }),
  /**
   * Wether or not to show notification-dialog or not.
   */
  isOpen: PropTypes.bool,
  /**
   * Determines the order of notification action buttons.
   * Use one of `acceptFirst`, `rejectFirst`.
   */
  buttonOrder: PropTypes.oneOf([
    'acceptFirst',
    'rejectFirst',
  ]),
  /**
   * Determines whether acceptAction, rejectAction or neither is emphasizedAction
   * Use one of `none`, `accept` or `reject`.
   */
  emphasizedAction: PropTypes.oneOf([
    'none',
    'accept',
    'reject',
  ]),
};

const defaultProps = {
  isOpen: false,
  buttonOrder: 'acceptFirst',
  emphasizedAction: 'none',
};

const isValidVariant = (variant) => Object.values(variants).indexOf(variant) >= 0;

const actionSection = (acceptAction, rejectAction, buttonOrder, emphasizedAction) => {
  if (!acceptAction && !rejectAction) {
    return null;
  }

  const actionButtons = [];

  if (acceptAction) {
    const buttonVariant = emphasizedAction === 'accept' ? { variant: ButtonVariants.EMPHASIS } : {};
    actionButtons.push(<Button {...buttonVariant} data-terra-notification-dialog-button="accept" key="accept" text={acceptAction.text} onClick={acceptAction.onClick} />);
  }

  if (rejectAction) {
    const buttonVariant = emphasizedAction === 'reject' ? { variant: ButtonVariants.EMPHASIS } : {};
    actionButtons.push(<Button {...buttonVariant} data-terra-notification-dialog-button="reject" key="reject" text={rejectAction.text} onClick={rejectAction.onClick} />);
  }

  return (
    <div className={cx('actions')}>
      {buttonOrder === 'acceptFirst' ? actionButtons : actionButtons.reverse()}
    </div>
  );
};

const NotificationDialog = (props) => {
  const theme = React.useContext(ThemeContext);

  const {
    title,
    startMessage,
    endMessage,
    content,
    acceptAction,
    rejectAction,
    variant,
    isOpen,
    buttonOrder,
    emphasizedAction,
    custom,
    ...customProps
  } = props;

  if (isOpen && acceptAction === undefined && rejectAction === undefined) {
    throw new Error('Unable to render the Notification dialog. Neither an `acceptAction` and/or `rejectAction` prop was provided which leaves the user without the ability to close the dialog.');
  }

  if (isOpen && !isValidVariant(variant)) {
    throw new Error('Unable to render the Notification dialog as the `variant` prop was not provided.');
  }

  const signalWord = variant === variants.CUSTOM ? (custom || {}).signalWord : <FormattedMessage id={`Terra.notification.dialog.${variant}`} />;

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return (
    <AbstractModal
      ariaLabel="Notification Dialog"
      aria-labelledby="notification-dialog-header"
      aria-describedby={title ? 'notification-dialog-title' : 'notification-dialog-header'}
      role="alertdialog"
      classNameModal={classNames(cx('notification-dialog', theme.className), customProps.className)}
      isOpen={isOpen}
      onRequestClose={() => {}}
      closeOnEsc={false}
      closeOnOutsideClick={false}
      zIndex="9000"
      data-terra-notification-dialog
    >
      <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true, clickOutsideDeactivates: false, escapeDeactivates: false }}>
        <div className={cx('notification-dialog-inner-wrapper')}>
          <div className={cx('notification-dialog-container')} tabIndex="0">
            <div className={cx(['floating-header-background', variant])} />
            <div className={cx(['header'])}>
              <div className={cx(['header-content'])}>
                <NotificationIcon variant={variant} iconClassName={(custom || {}).iconClassName} />
                <div className={cx('header-container')}>
                  <div id="notification-dialog-signal-word" className={cx('signal-word')}>{signalWord}</div>
                  <div id="notification-dialog-title" className={cx('title')}>{title}</div>
                </div>
              </div>
            </div>
            <div className={cx('body')}>
              {(startMessage)
                && <div className={cx('message')}>{(startMessage)}</div>}
              {content
                && <div className={cx('message')}>{content}</div>}
              {endMessage
                && <div className={cx('message')}>{endMessage}</div>}
            </div>
            <div className={cx('footer')}>
              {actionSection(
                acceptAction,
                rejectAction,
                buttonOrder,
                emphasizedAction,
              )}
            </div>
          </div>
        </div>
      </FocusTrap>
    </AbstractModal>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
};

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;

export { variants as NotificationDialogVariants, ContentLayoutAsList };
export default NotificationDialog;
