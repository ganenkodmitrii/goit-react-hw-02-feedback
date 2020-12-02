import Container from './components/Container/Container';
const { Component } = require('react');

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleAddStatisticsGood = () => {
        this.setState(prevStatistic => ({
            good: prevStatistic.good + 1,
        }));
    };

    handleAddStatisticsNeutral = () => {
        this.setState(prevStatistic => ({
            neutral: prevStatistic.neutral + 1,
        }));
    };

    handleAddStatisticsBad = () => {
        this.setState(prevStatistic => ({
            bad: prevStatistic.bad + 1,
        }));
    };

    render() {
        return (
            <Container>
                <div>
                    <h1
                        style={{
                            color: 'white',
                            margin: '0',
                            padding: '0',
                        }}
                    >
                        Please leave feedback
                    </h1>

                    <button
                        type="button"
                        style={{ marginRight: '5px' }}
                        onClick={this.handleAddStatisticsGood}
                    >
                        good
                    </button>
                    <button
                        type="button"
                        style={{ marginRight: '5px' }}
                        onClick={this.handleAddStatisticsNeutral}
                    >
                        neutral
                    </button>
                    <button type="button" onClick={this.handleAddStatisticsBad}>
                        bad
                    </button>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        good: {this.state.good}
                    </p>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        neutral: {this.state.neutral}
                    </p>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        bad: {this.state.bad}
                    </p>
                </div>
            </Container>
        );
    }
}
