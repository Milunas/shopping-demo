import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable(({providedIn: 'root'}))
export class AccountService {

    accounts = [
        {
            name: "Master Account",
            status: "active"
        },
        {
            name: "Some Account",
            status: "inactive"
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    getAccounts() {
        return this.accounts;
    }

    addAccount(name: string, status: string){
        this.accounts.push({name, status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}