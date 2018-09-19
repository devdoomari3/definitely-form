"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class StreamToComponent extends React.Component {
    componentDidMount() {
        this.subscribe();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.stream !== this.props.stream) {
            this.unsubscribe();
            this.subscribe();
        }
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return this.props.children(this.state.value);
    }
    subscribe() {
        this.subscription = this.props.stream
            .subscribe(value => this.setState({ value }));
    }
    unsubscribe() {
        this.subscription && this.subscription.unsubscribe();
    }
}
exports.StreamToComponent = StreamToComponent;
