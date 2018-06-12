import PropTypes from "prop-types";
import React from "react";
import { createPortal } from "react-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const initialState = {
  isContentLoaded: false,
  confirmClose: false
};

export default class Window extends React.Component {
  static propTypes = {
    /**
     * Render prop.
     * `function({ closeWindow, setLoading, setConfirmClose })`
     * `closeWindow: function()` - Request the window to be closed.
     * `setLoading: function(bool)` - Show a loading spinner in the window.
     * `setConfirmClose: function(bool)` - Require the user to confirm before closing the window.
     * */
    children: PropTypes.func.isRequired,
    /** Window ID. Must be unique. */
    id: PropTypes.string.isRequired,
    /** Window title. Cannot be changed. */
    title: PropTypes.string.isRequired,
    /** See MUI.Window. */
    options: PropTypes.object,
    /** Whether the window is open. */
    open: PropTypes.bool,
    /** Text to display in confirm close dialog. */
    confirmCloseText: PropTypes.string,
    /** Called when the window has opened. */
    onOpen: PropTypes.func,
    /** Called when the window requests to be closed. */
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    open: false,
    confirmCloseText: "Close window?"
  };

  state = initialState;

  componentDidMount() {
    if (this.props.open) {
      this.open();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.open();
    } else if (this.props.open && !nextProps.open) {
      this.close();
    }
  }

  componentWillUnmount() {
    if (this.props.open) {
      this.close();
    }
  }

  isClosing = false;

  open() {
    const { id, title, options } = this.props;
    this.win = Franson.MUI.createWindow({
      id: id,
      title: title,
      onContentLoaded: this.onContentLoaded,
      onClose: this.onClose,
      onCloseComplete: this.onCloseComplete,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      ...options
    });
  }

  close() {
    if (this.win) {
      this.isClosing = true;
      this.win.close();
      this.win = null;
    }
  }

  onContentLoaded = () => {
    this.setState({ isContentLoaded: true });
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  onClose = async (windowEl, instance) => {
    instance.isClosing = this.isClosing;
    if (this.props.onRequestClose && !this.isClosing) {
      const result = await this.confirmClose();
      if (result) {
        this.props.onRequestClose();
      }
    }
  };

  onCloseComplete = () => {
    this.setState(initialState);
    this.isClosing = false;
  };

  focus = () => {
    if (this.win) {
      Franson.MUI.focusWindow(this.win);
    }
  };

  confirmClose = () => {
    let promise = Promise.resolve(true);
    if (this.state.confirmClose) {
      promise = new Promise(resolve => {
        const result = window.confirm(this.props.confirmCloseText); // TODO: <Confirm> component
        resolve(result);
      });
    }
    return promise;
  };

  closeWindow = () => {
    if (this.win) {
      this.win.close();
    }
  };

  setLoading = value => {
    if (this.win) {
      if (value) {
        this.win.showSpinner();
      } else {
        this.win.hideSpinner();
      }
    }
  };

  setConfirmClose = confirmClose => {
    this.setState({ confirmClose });
  };

  render() {
    if (!this.state.isContentLoaded) {
      return null;
    }
    return createPortal(
      <ErrorBoundary>
        {this.props.children({
          closeWindow: this.closeWindow,
          setLoading: this.setLoading,
          setConfirmClose: this.setConfirmClose
        })}
      </ErrorBoundary>,
      this.win.contentEl
    );
  }
}
