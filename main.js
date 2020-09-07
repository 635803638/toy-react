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

        return (<div>
            <h1> My Csomponent </h1> {
                this.children
            } </div>
        );
    }
}




render(<MyComponent id="a"
    class="c" >
    <div> abc </div>
    <div> 222 </div>
    <div> 333 </div>
</MyComponent >, document.body);