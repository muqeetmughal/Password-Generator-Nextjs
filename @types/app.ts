

export interface Password {
    username? : string,
    password : string,
    website? : string
}

export type AppContextType = {
    passwords: Password[];
    // setPasswords : (password : number) => void
    // updateTodo: (id: number) => void;
};