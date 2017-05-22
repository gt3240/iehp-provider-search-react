import React from 'react';
import SearchBox from './SearchBox'
import ResultsBox from './ResultsBox'

class SamplePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
              <div className="col-sm-12">
                <h3 className="page-header">Provider Search Sample</h3>
              </div>
              <div className="col-sm-6">
                <SearchBox />
              </div>
              <div className="col-sm-12">
                <ResultsBox />
              </div>
            </div>
            );
    }

}

export default SamplePage;