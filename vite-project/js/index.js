import App from "../component/app.js"
import '../style/style.css';


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