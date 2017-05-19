import React from 'react';
import { PrimaryButton } from '../common/Buttons';
import SnippetContainer from '../common/SnippetContainer';

// Since this component is simple and static, there's no parent container for
// it.
const FormButtonsPage = () => {

  let primarButtonCode = `  <button class="btn btn-primary">
    Primary
  </button>`;

  return (
    <div>
      <h3 className="alt-header">Form Buttons Page</h3>
      <div className="col-sm-4">
        <SnippetContainer snippet={ PrimaryButton } snippetTitle='Primary Button' code={ primarButtonCode } />
      </div>
    </div>
    );
};

export default FormButtonsPage;