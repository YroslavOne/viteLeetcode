import App from "./js/app.js"
import{dataMenuLink} from "./data.js"
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