export class LoggingService {
    logStatusChange(status: string){
        console.log('A server changed status: ' + status);
    }
}