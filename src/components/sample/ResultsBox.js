import React from 'react';
import {connect} from 'react-redux';
//import {setCurrentCharacter, getCharacterProfile} from '../reducers/character/actions';

const ResultsBox = ({providers}) => {
    console.log('/------------------------------------');
    console.log('providers are', providers);
    console.log('/------------------------------------');
  return (
    <div id="character-list">
      <h2>Providers</h2>
      <ul>
        
      </ul>
    </div>
  )
};

const mapStateToProps = ({providers}) => ({providers});

export default connect(mapStateToProps)(ResultsBox);