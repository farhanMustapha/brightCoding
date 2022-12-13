
        let user={
        password:"123",
        userName:"admin"
    }
let i
    let name=['add','delete','uppdate']
    for (i=0;i<3;i++){
        document.write("<button>"+name[i]+"<button>")
    }

        

    function add(){
        document.write("<input type='text'></input>")
        document.write("<button onclick='add()''>add</button>")
    }
    