import React, { Fragment } from "react";
import Markdown from "react-markdown";
import Icon from "../Icon/Icon";

export default class Example extends React.Component {
  state = { showCode: false };

  toggleCode = () => {
    this.setState(prevState => ({ showCode: !prevState.showCode }));
  };

  render() {
    const { title, text, code, render, context } = this.props;
    const { showCode } = this.state;
    const child = render(context);
    return (
      <Fragment>
        <h2>
          {title}
          {code && (
            <div
              style={{ cursor: "pointer", float: "right", marginRight: "8px" }}
              onClick={this.toggleCode}
            >
              <Icon name="code" size={24} type="regular" />
            </div>
          )}
        </h2>
        {text && <Markdown source={text} />}
        {showCode &&
          code && (
            <Markdown
              source={`
~~~
${code}
~~~
`}
            />
          )}
        <div className="example">
          <div className="example-box">
            {child.type === Fragment ? (
              React.Children.map(child.props.children, (child, index) => (
                <div key={`example-${index}`} className="example-multiple-item">
                  {child}
                </div>
              ))
            ) : (
              <div className="example-single-item">{child}</div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
