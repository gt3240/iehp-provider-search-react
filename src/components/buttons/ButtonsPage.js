import React from 'react';
import { DefaultButton } from '../common/Buttons';
import SnippetContainer from '../common/SnippetContainer';

// Since this component is simple and static, there's no parent container for
// it.
const ButtonsPage = () => {

    let primarButtonCode = `  <button class="btn btn-primary w150">
    Primary
  </button>

  <button class="btn btn-warning w150">
    Warning
  </button>

  <button class="btn btn-danger w150">
    Danger
  </button>

   <button class="btn btn-primary w150" disabled>
    Disabled
  </button>
  `
  ;
    return (
        <div>
          <div className="col-sm-12">
            <h3 className="page-header">Buttons</h3>
          </div>
          <div className="col-sm-6">
            <SnippetContainer snippetTitle='Default Buttons' code={ primarButtonCode }>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-primary" title="Primary" /> 
              </div>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-warning" title="Warning" />
              </div>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-danger" title="Danger" />
              </div>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-primary" title="Disabled" disabled={true}/>
              </div>
            </SnippetContainer>
          </div>

          <div className="col-sm-6">
            <SnippetContainer snippetTitle='Default Buttons' code={ primarButtonCode }>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-primary" title="Primary" /> 
              </div>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-warning" title="Warning" />
              </div>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-danger" title="Danger" />
              </div>
              <div className="display-inline mr-10">
                <DefaultButton type="btn-primary" title="Disabled" disabled={true}/>
              </div>
            </SnippetContainer>
          </div>
        </div>
        );
};

export default ButtonsPage;