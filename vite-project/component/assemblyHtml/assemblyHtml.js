// function assemblyHtml(tag, class, id){
// const $elemHtmlTag = document.createElement(tag);
// $elemHtmlTag
// document.createElement(tag)

// }
// export default assemblyHtml

class assemblyHtml {

    constructor(classForTag, idForTag, textForTag, selector, typeForTag){
        this.textForTag = textForTag;
        this.classForTag = classForTag;
        this.idForTag = idForTag;
        this.selector = selector;
        this.typeForTag = typeForTag;

    }
    get div(){
        return this.addElementDiv
    }
    addElementDiv(classForTag, idForTag, textForTag, selector){
        this.element = document.createElement("div");
        this.element.textContent = textForTag;
        this.element.className = classForTag;
        this.element.id = idForTag;
        let parent = selector;
        parent.appendChild(this.element);
        let thisElement = document.getElementById(idForTag)
        return thisElement
    }
    get button(){
        return this.addElementButton
    }
    addElementButton(classForTag, idForTag, textForTag, selector){
        this.element = document.createElement("button");
        this.element.textContent = textForTag;
        this.element.className = classForTag;
        this.element.id = idForTag;
        let parent = selector;
        parent.appendChild(this.element);
        let thisElement = document.getElementById(idForTag)
        return thisElement
    }
    get a(){
        return this.addElementA
    }
    addElementA(classForTag, idForTag, textForTag, selector){
        this.element = document.createElement("a");
        this.element.textContent = textForTag;
        this.element.className = classForTag;
        this.element.id = idForTag;
        let parent = selector;
        parent.appendChild(this.element);
        let thisElement = document.getElementById(idForTag)
        return thisElement
    }
    get p(){
        return this.addElementP
    }
    addElementP(classForTag, idForTag, textForTag, selector){
        this.element = document.createElement("p");
        this.element.textContent = textForTag;
        this.element.className = classForTag;
        this.element.id = idForTag;
        let parent = selector;
        parent.appendChild(this.element);
        let thisElement = document.getElementById(idForTag)
        return thisElement
    }
    get input(){
        return this.addElementInput
    }
    addElementInput(classForTag, idForTag, textForTag, selector, typeForTag){
        this.element = document.createElement("input");
        this.element.placeholder = textForTag;
        this.element.className = classForTag;
        this.element.id = idForTag;
        this.element.type = typeForTag
        let parent = selector;
        parent.appendChild(this.element);
        let thisElement = document.getElementById(idForTag)
        return thisElement
    }
    get h3(){
        return this.addElementH3
    }
    addElementH3(classForTag, idForTag, textForTag, selector){
        this.element = document.createElement("h3");
        this.element.textContent = textForTag;
        this.element.className = classForTag;
        this.element.id = idForTag;
        let parent = selector;
        parent.appendChild(this.element);
        let thisElement = document.getElementById(idForTag)
        return thisElement
    }
}

export const tagForPage = new assemblyHtml();