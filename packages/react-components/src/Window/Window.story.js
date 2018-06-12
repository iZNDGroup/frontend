import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import {
  Button,
  CancelButton,
  Form,
  SaveButton,
  TextInputField,
  Window
} from "../index";

storiesOf("Components/Window", module).add(
  "Window",
  createStory(
    `
Use this component to display content in a window.

The examples below use a placeholder design. The window will look and behave differently in VehicleTracker.
`,
    [
      {
        title: "Single window example",
        code: `
<Button
  title="Open window"
  onClick={() => {
    this.setState({ open: true });
  }}
/>
<Button
  title="Close window"
  onClick={() => {
    this.setState({ open: false });
  }}
/>
<Window id="my-window" title="My window" open={this.state.open}>
  {() => <div>Content</div>}
</Window>
`,
        render: () => (
          <StateProvider initialState={{ open: false }}>
            {(state, setState) => (
              <Fragment>
                <Button
                  title="Open window"
                  onClick={() => {
                    setState({ open: true });
                  }}
                />
                <Button
                  title="Close window"
                  onClick={() => {
                    setState({ open: false });
                  }}
                />
                <Window id="my-window" title="My window" open={state.open}>
                  {() => <div>Content</div>}
                </Window>
                <div id="my-window-container" />
              </Fragment>
            )}
          </StateProvider>
        )
      },
      {
        title: "Multiple windows example",
        code: `
<Button
  title="Open new window"
  onClick={() => {
    this.setState(prevState => ({
      open: [...prevState.open, prevState.counter],
      counter: prevState.counter + 1
    }));
  }}
/>
<Button
  title="Close all"
  onClick={() => {
    this.setState({ open: [] });
  }}
/>
{this.state.open.map(id => (
  <Fragment key={\`window\${id}\`}>
    <Window
      id={\`window\${id}\`}
      title={\`Window \${id}\`}
      open={true}
      onRequestClose={() => {
        this.setState(prevState => ({
          open: prevState.open.filter(openId => openId !== id)
        }));
      }}
    >
      {({ closeWindow }) => (
        <CancelButton
          title="Close this window"
          onClick={closeWindow}
        />
      )}
    </Window>
    <div id={\`window\${id}-container\`} />
  </Fragment>
))}
`,
        render: () => (
          <StateProvider initialState={{ open: [], counter: 1 }}>
            {(state, setState) => (
              <Fragment>
                <Button
                  title="Open new window"
                  onClick={() => {
                    setState(prevState => ({
                      open: [...prevState.open, prevState.counter],
                      counter: prevState.counter + 1
                    }));
                  }}
                />
                <Button
                  title="Close all"
                  onClick={() => {
                    setState({ open: [] });
                  }}
                />
                {state.open.map(id => (
                  <Fragment key={`window${id}`}>
                    <Window
                      id={`window${id}`}
                      title={`Window ${id}`}
                      open={true}
                      onRequestClose={() => {
                        setState(prevState => ({
                          open: prevState.open.filter(openId => openId !== id)
                        }));
                      }}
                    >
                      {({ closeWindow }) => (
                        <CancelButton
                          title="Close this window"
                          onClick={closeWindow}
                        />
                      )}
                    </Window>
                    <div id={`window${id}-container`} />
                  </Fragment>
                ))}
              </Fragment>
            )}
          </StateProvider>
        )
      },
      {
        title: "Advanced example",
        text:
          "Uses a `Form` inside a `Window` with confirm before close if the form data is changed.",
        code: `
class MyPanel extends React.Component {
  state = {
    payload: null
  };

  window = null;

  open = async payload => {
    if (this.state.payload && this.state.payload.id === payload.id) {
      this.window.focus();
      return;
    }
    const result = await this.window.confirmClose();
    if (result) {
      this.setState({ payload });
    }
  };

  close = () => {
    this.setState({ payload: null });
  };

  render() {
    return (
      <div>
        <Button
          title="Open Item 1"
          onClick={() => {
            this.open({ id: 1, name: "Item 1" });
          }}
        />
        <Button
          title="Open Item 2"
          onClick={() => {
            this.open({ id: 2, name: "Item 2" });
          }}
        />
        <Window
          id="window-item"
          title="Item"
          open={!!this.state.payload}
          confirmCloseText={
            "The form data is changed. Close without saving?"
          }
          onRequestClose={this.close}
          ref={component => {
            this.window = component;
          }}
        >
          {({ closeWindow, setLoading, setConfirmClose }) => (
            <MyForm
              payload={this.state.payload}
              onBeforeSubmit={() => {
                setLoading(true);
              }}
              onAfterSubmit={() => {
                setLoading(false);
                setConfirmClose(false);
                closeWindow();
              }}
              onCancel={() => {
                closeWindow();
              }}
              onDirtyChange={dirty => {
                setConfirmClose(dirty);
              }}
            />
          )}
        </Window>
      </div>
    );
  }
}

class MyForm extends React.Component {
  render() {
    return (
      <Form
        initialValues={{
          name: this.props.payload.name
        }}
        enableReinitialize={true}
        onSubmit={({ values, setSubmitting }) => {
          this.props.onBeforeSubmit();
          setTimeout(() => {
            this.props.onAfterSubmit();
          }, 1000);
        }}
        onDirtyChange={this.props.onDirtyChange}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Fragment>
            <TextInputField name="name" />
            <SaveButton onClick={handleSubmit} disabled={isSubmitting} />
            <CancelButton
              onClick={() => {
                this.props.onCancel();
              }}
            />
          </Fragment>
        )}
      </Form>
    );
  }
}
`,
        render: () => (
          <StateProvider initialState={{ payload: null }}>
            {(state, setState) => {
              let window = null;
              const open = async payload => {
                if (state.payload && state.payload.id === payload.id) {
                  window.focus();
                  return;
                }
                const result = await window.confirmClose();
                if (result) {
                  setState({ payload });
                }
              };
              const close = () => {
                setState({ payload: null });
              };

              return (
                <div>
                  <Button
                    title="Open Item 1"
                    onClick={() => {
                      open({ id: 1, name: "Item 1" });
                    }}
                  />
                  <Button
                    title="Open Item 2"
                    onClick={() => {
                      open({ id: 2, name: "Item 2" });
                    }}
                  />
                  <Window
                    id="window-item"
                    title="Item"
                    open={!!state.payload}
                    confirmCloseText={
                      "The form data is changed. Close without saving?"
                    }
                    onRequestClose={close}
                    ref={component => {
                      window = component;
                    }}
                  >
                    {({ closeWindow, setLoading, setConfirmClose }) => (
                      <MyForm
                        payload={state.payload}
                        onBeforeSubmit={() => {
                          setLoading(true);
                        }}
                        onAfterSubmit={() => {
                          setLoading(false);
                          setConfirmClose(false);
                          closeWindow();
                        }}
                        onCancel={() => {
                          closeWindow();
                        }}
                        onDirtyChange={dirty => {
                          setConfirmClose(dirty);
                        }}
                      />
                    )}
                  </Window>
                  <div id="window-item-container" />
                </div>
              );
            }}
          </StateProvider>
        )
      }
    ],
    [Window]
  )
);

class MyForm extends React.Component {
  render() {
    return (
      <Form
        initialValues={{
          name: this.props.payload.name
        }}
        enableReinitialize={true}
        onSubmit={({ values, setSubmitting }) => {
          this.props.onBeforeSubmit();
          setTimeout(() => {
            this.props.onAfterSubmit();
          }, 1000);
        }}
        onDirtyChange={this.props.onDirtyChange}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Fragment>
            <TextInputField name="name" />
            <SaveButton onClick={handleSubmit} disabled={isSubmitting} />
            <CancelButton
              onClick={() => {
                this.props.onCancel();
              }}
            />
          </Fragment>
        )}
      </Form>
    );
  }
}

Franson.MUI = {};

Franson.MUI.createWindow = options => {
  const windowContainerId = `${options.id}-container`;

  const windowEl = document.createElement("div");
  windowEl.style.border = "1px dashed #000";
  windowEl.style.margin = "16px 0";
  windowEl.style.padding = "16px";
  document.getElementById(windowContainerId).appendChild(windowEl);

  const headerEl = document.createElement("div");
  headerEl.innerText = options.title;
  windowEl.appendChild(headerEl);

  const contentEl = document.createElement("div");
  windowEl.appendChild(contentEl);

  const spinnerEl = document.createElement("div");
  spinnerEl.innerText = "Loading...";
  spinnerEl.style.display = "none";
  windowEl.appendChild(spinnerEl);

  options.onContentLoaded();

  const instance = {
    id: options.id,
    contentEl: contentEl,
    showSpinner: showSpinner,
    hideSpinner: hideSpinner,
    close: close,
    isClosing: false,
    onClose: options.onClose,
    onCloseComplete: options.onCloseComplete
  };

  function showSpinner() {
    spinnerEl.style.display = "";
  }

  function hideSpinner() {
    spinnerEl.style.display = "none";
  }

  function close() {
    instance.isClosing = true;
    instance.onClose(null, instance);
    if (instance.isClosing === false) {
      return false;
    }
    document.getElementById(windowContainerId).removeChild(windowEl);
    instance.onCloseComplete();
    return true;
  }

  return instance;
};

Franson.MUI.focusWindow = win => {
  action("Window focused")(win.id);
};
