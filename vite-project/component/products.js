import {filterById} from "./loupe/loupeManipulation.js"
import cleanPage from "./cleanPage.js";
import ProductMainHtml from "./product/productMainHtml.js"
function Products(objFilter){
cleanPage()
const $app = document.getElementById("app")
ProductMainHtml($app)
}
export default Products;