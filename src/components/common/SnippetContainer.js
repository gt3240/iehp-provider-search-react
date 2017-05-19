import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/styles';
import { Collapse } from 'react-collapse';

class SnippetContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showCode: false
        }

        this.onShowCode = this.onShowCode.bind(this);
    }

    onShowCode() {
        if (this.state.showCode) {
            this.setState({
                showCode: false
            });

        } else {
            this.setState({
                showCode: true
            });
        }
    }

    render() {
        return (
            <div className="snippet">
              <div className="snippet-container">
                <div className="header">
                  <span className="title">{ this.props.snippetTitle }</span>
                  <i className="fa fa-code" aria-hidden="true" onClick={ this.onShowCode }></i>
                </div>
                <div className="p-20">
                  {this.props.children}
                </div>
              </div>
              <Collapse isOpened={ this.state.showCode }>
                <SyntaxHighlighter language='html' style={ agate } showLineNumbers={ true } startingLineNumber={ 1 }>
                  { this.props.code }
                </SyntaxHighlighter>
              </Collapse>
            </div>
            );
    }
}

export default SnippetContainer;