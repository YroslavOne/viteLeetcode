import App from "../component/app.js"
// import{dataMenuLink} from "../component/data.js"
import '../style/style.css';
import {cheking} from "../counter.js"
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';


function Render({root, app}){
    this.render = ()=>{
        document.querySelector(root).insertAdjacentHTML("beforeend", app)
    }
}

const root = new Render({
    root: "#app",
    app: App()
})

root.render();

setupCounter(document.getElementById('app'));