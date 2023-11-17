import {filterById} from "./loupe/loupeManipulation.js"
import cleanPage from "./cleanPage.js";
function loupe(id){
cleanPage()
const $app = document.getElementById('app')

filterById($app, id)
}
export default loupe;