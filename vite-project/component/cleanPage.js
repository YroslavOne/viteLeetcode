function cleanPage(){
const $app = document.getElementById('app');
const $mainBlock = document.querySelector(".main_block");
const $mainCatalogBlock = document.querySelector(".main_catalog_block");
$app.removeChild($mainBlock)
$app.removeChild($mainCatalogBlock)
}
export default cleanPage;