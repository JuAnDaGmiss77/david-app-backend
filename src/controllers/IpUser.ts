import Ip , {IP} from '../models/IP';
import {Request, Response} from 'express';

export const savedIPUser = async (req: Request, res: Response ) => {
    const ipFound = await Ip.findOne({ip: req.body.ip});
    if (ipFound) return res.status(409).json({ message: "ip is saved"});

    const ip: IP = new Ip({
        ip: req.body.ip
    })
    const ipSaved = await ip.save();
    res.status(201).json({ message: "ip saved", ipSaved});

}

export const getIPUser = async (req: Request, res: Response) => {
    const ipFound = await Ip.findOne();
    console.log(ipFound)
    if (ipFound) return res.status(200).json({ message: "list ip" , ipFound});

    res.status(404).json({message: "ip not found"})

    

}