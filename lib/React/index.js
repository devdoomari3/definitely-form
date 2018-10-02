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
            .pipe(combineLatest_1.combineLatest(stateManager.derivedStateStream, (formState, derivedState) => ({
            formState, derivedState,
        })))
            .subscribe(({ formState, derivedState, }) => {
            this.setState({
                formState,
                derivedState,
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
        const { formState, derivedState, } = this.state;
        return this.props.children(Object.assign({ inputEventHandlers,
            derivedState }, {
            touched: {},
            active: {},
            edited: {},
            values: {},
            parsedValues: {},
        }, formState));
    }
}
exports.ReactComponent = ReactComponent;
