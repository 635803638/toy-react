// for (const i of [1, 2, 3]) {
//     console.log(i);
// }
import {
    createElement,
    Component,
    render
} from "./toy-react.js"
class MyComponent extends Component {
    render() {
        return <div > My Component < /div >
    }
}




render( < MyComponent id = "a"
        class = "c" >
        <
        /MyComponent > , document.body);