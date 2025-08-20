export class UsersService {
    users: {id: number, name: string, age: number, gender: string, isMarried: boolean}[] = 
    [
        {id:1 ,name:'jonh',age:28,gender:'male',isMarried:false},
        {id:2, name:'juan',age:32,gender:'male',isMarried:true},
        {id:3, name:'gabi',age:25,gender:'female',isMarried:false}
    ]
    getAllUsers(){
        return this.users;
    }

    getUsersById(id: number){
        return this.users.find(x => x.id === id);
    }

    createUser(user:{id: number, name: string, age: number, gender: string, isMarried: boolean} ){
        this.users.push(user);
    }

    
}  