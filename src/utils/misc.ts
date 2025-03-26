import { Tadpole } from "../domain/user";

export function hasTadpole(list: Tadpole[], username: string): boolean {
    for (let t of list) {
        if (t.username == username) return true;
    }
    return false;
}

export function getTadpole(list: Tadpole[], username: string): number {
    for (let i = 0; i < list.length; i += 1) {
        if (list[i].username == username) return i;
    }    
    return -1;
}