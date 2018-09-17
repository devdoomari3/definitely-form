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
const combineLatest_1 = require("rxjs/operators/combineLatest");
class ReactComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentDidMount() {
        // subscribe to stateManager.
        const { stateManager, } = this.props;
        this.subscription = stateManager
            .formStateStream
            .pipe(combineLatest_1.combineLatest(stateManager.errorStream, (formState, errors) => ({
            formState, errors,
        })))
            .subscribe(({ formState, errors, }) => {
            this.setState({
                formState,
                errors,
            });
        });
    }
    componentWillUnmount() {
        // unsubscribe to stateManager.
        this.subscription &&
            this.subscription.unsubscribe();
    }
    render() {
        const { stateManager, } = this.props;
        const { inputEventHandlers, } = stateManager;
        const { formState, errors, } = this.state;
        const { touched = {}, active = null, edited = {}, values = {}, } = formState || {};
        return this.props.children({
            inputEventHandlers,
            touched,
            active,
            errors,
            edited,
            values,
        });
    }
}
exports.ReactComponent = ReactComponent;
