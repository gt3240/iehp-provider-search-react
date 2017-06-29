import React from 'react';

const ProviderInfoCard = ({ provider }) => {
    //console.log('provider info ------', provider);
    return (
        <div className="provider-info-card">
            {provider.lastName && 
                <span>{provider.lastName}, {provider.firstName} </span>
            }

            {!provider.lastName &&
                <span>{provider.organizationName}</span>
            }
        </div>
    )
}

export default ProviderInfoCard;