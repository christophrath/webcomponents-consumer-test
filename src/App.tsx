import * as React from 'react';
import '@axa-ch/button'

interface Props {
    name:
        string
}

class App extends React.Component<Props> {
    render() {
        const {name} = this.props;
        return (
            <>
                <h1>
                    Hello {name}
                </h1>
                <axa-button variant={'red'} size={'large'}>Hello Button</axa-button>
            </>
        );
    }
}

export default App;
