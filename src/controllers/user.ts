import User, { IUser } from "../models/user";
import { Request, Response } from "express";
class UserControllers {
    public async index(req: Request, res: Response) {
        const users = await User.find({});
        res.json({ message: "All users", users });
    }
    public async createUser(req: Request, res: Response) {
        const { fullname, username, password, email } = req.body;
        const nUser = new User(req.body)
        await nUser.save();
        res.json({ message: "User registred ", nUser });
        res.status(101).end();
    }
    public async editUser(req: Request, res: Response) {
        const { id } = req.params;
        const { fullname, username, password, email } = req.body;
        const eUser = await User.findByIdAndUpdate(id, req.body);
        res.json({ message: "Updated user", eUser });
        res.status(101).end();
    }
    public async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        const dUser = await User.findByIdAndDelete(id);
        res.json({ message: "User Deleted", dUser });
        res.status(101).end();
    }
    public async getProfile(req: Request, res: Response) {
        const { id } = req.params;
        const findUser = await User.findById(id);
        res.json({ message: "Profile Users", findUser });
    }
}
export const userControllers = new UserControllers();
