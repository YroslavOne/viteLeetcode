function aboutHtml(elementHtml){
const $divAboutBreadCrumbs = document.createElement('div');
$divAboutBreadCrumbs.className = "breadCrumbs";
elementHtml.appendChild($divAboutBreadCrumbs);
const $pAboutBreadCrumbs = document.createElement('p');
$pAboutBreadCrumbs.id = "breadCrumbs";
$pAboutBreadCrumbs.textContent = `Home / About`;
$divAboutBreadCrumbs.appendChild($pAboutBreadCrumbs)

const $divAbout = document.createElement("div");
$divAbout.className = "divAbout";
elementHtml.appendChild($divAbout);
const $divAboutTitle = document.createElement('div');
$divAboutTitle.className = "aboutTitle";
$divAbout.appendChild($divAboutTitle);
const $h2AboutHistori = document.createElement('h2');
$h2AboutHistori.className = "h2AboutHistori"
$h2AboutHistori.textContent = "/ Our History"
$divAboutTitle.appendChild($h2AboutHistori);

const $pAboutText = document.createElement('p');
$pAboutText.className = "about-text";
$pAboutText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste."
$divAbout.appendChild($pAboutText);


}
export default aboutHtml