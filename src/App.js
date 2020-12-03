// import { Component } from 'react';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

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

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return (
            Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
        );
    };

    render() {
        return (
            <Container title="Cafe «Expresso»">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.handleAddStatistics}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            options={this.state}
                            // good={}
                            // neutral={}
                            // bad={}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </Container>
        );
    }
}
