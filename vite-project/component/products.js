import cleanPage from './cleanPage.js';
import ProductMainHtml from './product/productMainHtml.js';
function Products(objFilter) {
  objFilter.featured = 'All';
  cleanPage();
  const $app = document.getElementById('app');
  ProductMainHtml($app);
}
export default Products;
