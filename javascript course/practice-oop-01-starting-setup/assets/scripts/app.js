class Tooltip{}

class ProjectItem{

    constructor(id, updateProjectFunction){
        this.id = id
        this.updateProjectFunction = updateProjectFunction
        this.connectSwitchButton()
        this.connectSwitchButton()
    }

    connectMoreInfoButton(){}

    connectSwitchButton(){
        const button = document.getElementById(this.id).querySelector('button:last-of-type')
        button.addEventListener('click', this.updateProjectFunction)
    }
}

class ProjectList{

    projects = []
    constructor(type, switchHandlerFunction){
        this.type = type

        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)))
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction
    }

    addProjects(){
        console.log(this)
    }

    switchProject(projectID){
       this.switchHandler(this.projects.find(p => p.id === projectID))
       this.projecxts = this.projects.filter(p => p.id !== projectID)
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