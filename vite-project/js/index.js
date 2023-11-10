import App from "../component/app.js"
import{dataMenuLink} from "../component/data.js"
import './style.css';

function Render({root, app}){
    this.render = ()=>{
        document.querySelector(root).insertAdjacentHTML("beforeend", app)
    }
}

const root = new Render({
    root: "#app",
    app: App(dataMenuLink)
})

root.render();