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
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
class PropsToStream extends React.Component {
    constructor() {
        super(...arguments);
        // mapper: (originalProps: OriginalPropsType) => ValueType;
        this.stream = new BehaviorSubject_1.BehaviorSubject(this.props.mapper(this.props));
    }
    componentDidUpdate() {
        this.stream.next(this.props.mapper(this.props));
    }
    render() {
        return this.props.children(this.stream);
    }
}
exports.PropsToStream = PropsToStream;
function propsToStream(mapper) {
    return (Component) => {
        return (props) => (React.createElement(PropsToStream, Object.assign({ mapper: mapper }, props), stream => (React.createElement(Component, Object.assign({}, props, { stream: stream })))));
    };
}
exports.propsToStream = propsToStream;
