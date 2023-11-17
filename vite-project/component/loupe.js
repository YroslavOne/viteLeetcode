import {filterById} from "./loupe/loupeManipulation.js"
import cleanPage from "./cleanPage.js";
function loupe(elementHtml, id){
cleanPage()

filterById(elementHtml, id)
}
export default loupe;