import Container from './components/Container/Container';
const { Component } = require('react');

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleAddStatistics = statistic => {
        this.setState(prevStatistic => ({
            [statistic]: prevStatistic[statistic] + 1,
        }));
    };

    // handleAddStatisticsGood = () => {
    //     this.setState(prevStatistic => ({
    //         good: prevStatistic.good + 1,
    //     }));
    // };

    // handleAddStatisticsNeutral = () => {
    //     this.setState(prevStatistic => ({
    //         neutral: prevStatistic.neutral + 1,
    //     }));
    // };

    // handleAddStatisticsBad = () => {
    //     this.setState(prevStatistic => ({
    //         bad: prevStatistic.bad + 1,
    //     }));
    // };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
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

                    <div>
                        {Object.keys(this.state).map(item => (
                            <button
                                type="button"
                                style={{ marginRight: '5px' }}
                                key={item}
                                onClick={() => this.handleAddStatistics(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    {/* <button
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
                    </button> */}

                    <div>
                        {Object.keys(this.state).map(item => (
                            <p
                                style={{
                                    color: 'white',
                                }}
                                key={item}
                            >
                                {/* function(item) */}
                                {item}: {this.state[item]}
                            </p>
                        ))}
                    </div>

                    {/* <p
                        style={{
                            color: 'white',
                        }}
                    >
                        Good: {this.state.good}
                    </p>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        Neutral: {this.state.neutral}
                    </p>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        Bad: {this.state.bad}
                    </p> */}
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        total: {this.countTotalFeedback()}
                    </p>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        Positive feedback:
                        {this.countPositiveFeedbackPercentage()}%
                    </p>
                </div>
            </Container>
        );
    }
}
