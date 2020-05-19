import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import Tab from './Tab';
import TabBar from './TabBar';
import TabPane from './TabPane';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const tabPropType = PropTypes.shape({
/**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPaneId: PropTypes.string.isRequired,
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: PropTypes.node,
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function triggering on selection.
   */
  onSelect: PropTypes.func,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
});

const propTypes = {
  /**
   * Child content to display within the selected tabPane.
   */
  children: PropTypes.node,
  /**
   * Data object for building tabs.
   */
  tabData: PropTypes.arrayOf(tabPropType),
    /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
  fill: PropTypes.bool,
  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: PropTypes.bool,
};

const defaultProps = {
  tabFill: false,
  fill: false,
};

const Tabs = ({
  tabFill,
  fill,
  tabData,
  ...customProps
}) => {
  const [isLabelTruncated, setIsLabelTruncated] = useState(false);

  const tabsClassNames = cx([
    'tabs-container',
    { 'tab-fill': tabFill },
    'structural',
    customProps.className,
  ]);

  let currentTabId;
  let currentPaneId;
  const tabs = tabData.map(tab => {
    if (tab.isSelected) {
      currentTabId = tabData.id;
      currentPaneId = tabData.associatedPaneId;
    }
    return <Tab {...tabData} />;
  });

  const tabBar = (
    <TabBar
      onTruncationChange={value => setIsLabelTruncated(value)}
    >
      {tabs}
    </TabBar>
  );

  return (
    <ContentContainer
      {...customProps}
      className={tabsClassNames}
      fill={fill}
      header={tabBar}
    >
      <TabPane
        key={currentPaneId}
        id={currentPaneId}
        associatedTabId={currentTabId}
        fill={fill}
      >
        {children}
      </TabPane>
    </ContentContainer>
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
