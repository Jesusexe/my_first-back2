export class UsersService {
    users: {id: number, name: string, email: string, gender: string, isMarried: boolean}[] = 
    [
        {id:1 ,name:'jonh', email: 'cerajesus14@gmail.com',gender:'male',isMarried:false},
        {id:2, name:'juan', email: 'cera@gmail.com',gender:'male',isMarried:true},
        {id:3, name:'gabi', email: 'jesus14@gmail.com',gender:'female',isMarried:false}
    ]
    getAllUsers(){
        return this.users;
    }

    getUsersById(id: number){
        return this.users.find(x => x.id === id);
    }

    createUser(user:{id: number, name: string, email: string, gender: string, isMarried: boolean} ){
        this.users.push(user);
    }

    
}  