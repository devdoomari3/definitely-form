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
        this.stream = new BehaviorSubject_1.BehaviorSubject(this.props.value);
    }
    componentDidUpdate() {
        this.stream.next(this.props.value);
    }
    render() {
        return this.props.children(this.stream);
    }
}
exports.PropsToStream = PropsToStream;
