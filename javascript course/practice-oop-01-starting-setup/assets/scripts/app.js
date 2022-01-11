class DomHElper{

    static clearElement (element){
        const cloneElenment = element.cloneNode(true)
        element.replaceWith(cloneElenment)
        return cloneElenment;
    }
    static moveElement(elementId, destination){
        const element = document.getElementById(elementId)
        const destinationP = document.querySelector(destination)
        destinationP.append(element)
    }
}

class Tooltip{}

class ProjectItem{

    constructor(id, updateProjectFunction, type){
        this.id = id
        this.updateProjectFunction = updateProjectFunction
        this.connectMoreInfoButton()
        this.connectSwitchButton(type)
    }

    connectMoreInfoButton(){}

    connectSwitchButton(type){
        let button = document.getElementById(this.id).querySelector('button:last-of-type')
        button = DomHElper.clearElement(button)
        button.textContent = type === 'active' ? 'Finish' : 'Activate'
        button.addEventListener(
            'click', 
            this.updateProjectFunction.bind(null, this.id)
        )
    }

    update(updateProject, type){
        this.updateProjectFunction = updateProject
        this.connectSwitchButton(type)
    }
}

class ProjectList{

    projects = []
    constructor(type, switchHandlerFunction){
        this.type = type

        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)),this.type)
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction
    }

    addProjects(project){
        this.projects.push(project)
        DomHElper.moveElement(project.id, `#${this.type}-projects ul`)
        project.update(this.switchProject.bind(this), this.type)
    }

    switchProject(projectID){
       this.switchHandler(this.projects.find(p => p.id === projectID))
       //this.projecxts = this.projects.filter(p => p.id !== projectID)
    }
}

class App {
    static init(){
        const activeProject = new ProjectList('active')
        const finishedproject  = new ProjectList('finished')

        activeProject.setSwitchHandlerFunction(
            finishedproject.addProjects.bind(finishedproject)
        )

        finishedproject.setSwitchHandlerFunction(
            activeProject.addProjects.bind(activeProject)
        )
    }
}

App.init()