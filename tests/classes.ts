// Interface IUser
interface IUser {
    name: string;
    email: string;
    isAdmin: boolean 
}
// class User implement IUser
class User implements IUser {
    name: string;
    email: string;
    isAdmin: boolean
    
    // constructor nhận giá trị
    constructor(name : string, email: string, isAdmin: boolean)
    {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
    // method getInfo()
    getInfo (): string {
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`
    }
}

// AdminUser kế thừa User, thêm method deleteUser
class Admin extends User {
    constructor (name: string, email: string) {
        super (name, email, true)
    }
    // method deleteUser
    deleteUser (user: User): void {
        console.log (`Admin ${this.name} deleted user ${user.name}`)
    }
} 
    // tạo instance
    const user1 = new User ("huongtt1", "huongtt1@gmail.com", false)
    const admin1 = new Admin ("huongtt2", "huongtt2@gmail.com")

// Mảng users
    const users: User[] = [user1, admin1]

// Duyệt mảng và in info
    users.forEach ((user) => {
        console.log(user.getInfo());
    })

// 7. Method deleteUser 
admin1.deleteUser(user1);
