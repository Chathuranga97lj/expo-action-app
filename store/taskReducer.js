import { ADD_TASK, DELETE_TASK, DID_TASK } from "./taskType";

const initialState = {
    tasks:
    [
        {"task":"Computer Network", "done":false, "id":"1"},
        {"task":"Object Oriented Programming", "done":false, "id":"2"},
        {"task":"Web Development", "done":false, "id":"3"}
      ]
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return{
                ...state, 
                tasks:[...state.tasks,{
                    task: action.payload,
                    done: false,
                    id: Math.random()
                }]
            }

        case DELETE_TASK:
            return{
                ...state,
                task: state.tasks.filter(item => item.id != action.payload)
            }  
            
        case DID_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item.id !== action.payload) {
                      // This isn't the item we care about - keep it as-is
                      return item
                    }
                
                    // Otherwise, this is the one we want - return an updated value
                    return {
                      ...item,
                      done: true
                    }
                  })
            }
            
            
            
        
        default:
            return state;

    
    }
}

export default taskReducer